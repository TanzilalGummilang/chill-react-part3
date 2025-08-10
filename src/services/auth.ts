export interface User {
  username: string;
  password: string;
}

interface Register extends User {
  confirmPassword: string;
}

const storage = sessionStorage;

export function register(user: Register): boolean {
  const users = JSON.parse(storage.getItem("users") || "[]") as User[];

  const exists = users.find(u => u.username === user.username);
  if (exists) return false;

  if (user.password !== user.confirmPassword) return false;

  users.push(user);
  storage.setItem("users", JSON.stringify(users));
  return true;
}

export function login(user: User): boolean {
  const users = JSON.parse(storage.getItem("users") || "[]") as User[];
  const found = users.find(
    u => u.username === user.username && u.password === user.password
  );

  if (found) {
    storage.setItem("currentUser", JSON.stringify(found));
    return true;
  }
  return false;
}

export function getCurrentUser(): User | null {
  const data = storage.getItem("currentUser");
  return data ? JSON.parse(data) : null;
}

export function logout() {
  storage.removeItem("currentUser");
}
