export interface User {
  username: string;
  password: string;
}

interface Register extends User {
  confirmPassword: string;
}

const storage = sessionStorage;

export function register(user: Register): boolean {
  if (!user.username || !user.password || !user.confirmPassword) return false;

  const users = getUsers();

  const userExists = users.find(u => u.username === user.username);
  if (userExists) return false;

  if (user.password !== user.confirmPassword) return false;

  users.push({
    username: user.username,
    password: user.password
  });

  setUsers(users);
  return true;
}

export function login(user: User): boolean {
  const users = getUsers();

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

function getUsers(): User[] {
  const rawUsers = storage.getItem("users");
  return rawUsers ? JSON.parse(rawUsers) : [];
}

function setUsers(users: User[]) {
  storage.setItem("users", JSON.stringify(users));
}

export function getCurrentUser(): User | null {
  const data = storage.getItem("currentUser");
  return data ? JSON.parse(data) : null;
}

function setCurrentUser(user: User) {
  storage.setItem("currentUser", JSON.stringify(user));
}
