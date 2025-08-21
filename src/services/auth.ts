import { apiUrl } from "../utils/constants";
import type { FirestoreResponse } from "./types";

export interface User {
  username: string;
  password: string;
}

export interface StoredUser extends User {
  id: string;
}

interface Register extends User {
  confirmPassword: string;
}

const storage = sessionStorage;

export async function register(user: Register): Promise<boolean> {
  if (!user.username || !user.password || !user.confirmPassword) return false;
  if (user.password !== user.confirmPassword) return false;

  const storedUsers = await retrieveUsers();

  const userExists = storedUsers.find(u => u.username === user.username);
  if (userExists) return false;

  await storeUser({ username: user.username, password: user.password });
  return true;
}

export async function login(user: User): Promise<boolean> {
  if (!user.username || !user.password) return false;

  const users = await retrieveUsers();
  if (users.length === 0) return false;

  const registeredUser = users.find(u => u.username === user.username && u.password === user.password);
  if (registeredUser) {
    setCurrentUser(registeredUser);
    return true;
  }

  return false;
}

export function logout() {
  storage.removeItem("currentUser");
}

export async function retrieveUsers(): Promise<StoredUser[]> {
  try {
    const response = await fetch(`${apiUrl}/users`);
    if (!response.ok) {
      console.error(`Failed to retrieve users: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json() as FirestoreResponse;
    if (!data || !data.documents) return [];

    return data.documents
      .map((doc) => {
        const id = doc.name.split("/").pop();
        const username = doc.fields.username.stringValue;
        const password = doc.fields.password.stringValue;
        if (!id || !username || !password) return null;
        return { id, username, password };
      })
      .filter((u): u is StoredUser => u !== null);
  } catch (error) {
    console.error("Error to retrieve users:", error);
    return [];
  }
}

async function storeUser(user: User): Promise<void> {
  const body = {
    fields: {
      username: { stringValue: user.username },
      password: { stringValue: user.password },
    },
  };

  try {
    await fetch(`${apiUrl}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error("Failed to save user to Firestore:", error);
    return;
  }
}

export function getCurrentUser(): StoredUser | null {
  const data = storage.getItem("currentUser");
  return data ? JSON.parse(data) : null;
}

function setCurrentUser(user: StoredUser) {
  storage.setItem("currentUser", JSON.stringify(user));
}
