import type { Film } from "../data/film";
import { continueWatching, topRated, trending, newRelease } from "../data/film";
import { getCurrentUser, type User } from "./auth";

interface UserFilm {
  id: Film["id"];
  username: User["username"];
}

const storage = sessionStorage;

function getAllFilmsData(): Film[] {
  return [...continueWatching, ...topRated, ...trending, ...newRelease];
}

function getUserFilms(): UserFilm[] {
  try {
    const raw = storage.getItem("userFilms");
    return raw ? JSON.parse(raw) : [];
  } catch {
    console.warn("Broken data in storage.");
    return [];
  }
}

function addUserFilms(entries: UserFilm[]) {
  storage.setItem("userFilms", JSON.stringify(entries));
}

export function getFilms(): Film[] {
  const currentUser = getCurrentUser();
  if (!currentUser) return [];

  const allFilms = getAllFilmsData();
  const userFilms = getUserFilms().filter(f => f.username === currentUser.username);

  return allFilms.filter(f => userFilms.some(uf => uf.id === f.id));
}

export function addFilm(id: Film["id"]) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    alert("Silakan login untuk menambahkan film.");
    return;
  }

  const userFilms = getUserFilms();
  const exists = userFilms.some(uf => uf.id === id && uf.username === currentUser.username);
  if (!exists) {
    userFilms.push({ id, username: currentUser.username });
    addUserFilms(userFilms);
    alert(`Film ditambahkan.`);
  }
}

export function removeFilm(id: Film["id"]) {
  const currentUser = getCurrentUser();
  if (!currentUser) return;

  const updated = getUserFilms().filter(uf => !(uf.id === id && uf.username === currentUser.username));
  addUserFilms(updated);
}
