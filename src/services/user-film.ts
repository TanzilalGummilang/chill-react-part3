import { retrieveFilms, type StoredFilm } from "./film";
import { apiUrl } from "../utils/constants";
import { getCurrentUser } from "./auth";
import type { FirestoreResponse } from "./types";

interface UserFilm {
  filmId: StoredFilm["id"];
}

interface UserStoredFilm extends UserFilm {
  id: string;
}

async function retrieveUserFilms(): Promise<UserStoredFilm[]> {
  const currentUser = getCurrentUser();
  if (!currentUser) return [];

  try {
    const response = await fetch(`${apiUrl}/users/${currentUser.id}/films`);
    if (!response.ok) {
      console.error(`Failed to retrieve all user films: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json() as FirestoreResponse;
    if (!data || !data.documents) return [];

    return data.documents
      .map((doc) => {
        const id = doc.name.split("/").pop();
        const filmId = doc.fields.filmId?.stringValue;
        if (!id || !filmId) return null;
        return { id, filmId };
      })
      .filter((u): u is UserStoredFilm => u !== null);
  }
  catch (error) {
    console.error("Error to retrieve all user films:", error);
    return [];
  }
}

async function storeUserFilm(filmId: UserFilm["filmId"]) {
  const body = {
    fields: {
      filmId: { stringValue: filmId },
    },
  }

  const currentUser = getCurrentUser();
  if (!currentUser) {
    alert("Silakan login untuk menambahkan film.");
    return;
  }

  try {
    const response = await fetch(`${apiUrl}/users/${currentUser.id}/films`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error(`Failed to add user film to Firestore: ${response.status} ${response.statusText}`);
      return;
    }

    alert(`Film ditambahkan.`);
  } catch (error) {
    console.error("Error to add user film to Firestore:", error);
    return;
  }
}

async function deleteUserFilm(userFilmId: UserStoredFilm["id"]) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    alert("Silakan login untuk menghapus film.");
    return;
  }
  
  try {
    const response = await fetch(`${apiUrl}/users/${currentUser.id}/films/${userFilmId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  
    if (!response.ok) {
      console.error(`Failed to remove user film: ${response.status} ${response.statusText}`);
      return;
    }
  } catch (error) {
    console.error("Error to remove user film:", error);
    return;
  }
}

export async function getUserFilms(): Promise<StoredFilm[]> {
  const currentUser = getCurrentUser();
  if (!currentUser) return [];

  const userFilms = await retrieveUserFilms();
  if (userFilms.length === 0) return [];

  const allFilms = await retrieveFilms();
  if (allFilms.length === 0) return [];

  return allFilms.filter(f => userFilms.some(uf => uf.filmId === f.id));
}

export async function addUserFilm(filmId: UserStoredFilm["filmId"]) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    alert("Silakan login untuk menambahkan film.");
    return;
  }

  const userFilms = await retrieveUserFilms();
  const exists = userFilms.some(uf => uf.filmId === filmId);
  if (exists) {
    alert(`Film sudah ada di daftar anda.`);
  } else {
    await storeUserFilm(filmId);
  }
}

export async function removeUserFilm(filmId: UserStoredFilm["filmId"]) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    alert("Silakan login untuk menghapus film.");
    return;
  };

  try {
    const userFilms = await retrieveUserFilms();
    if (userFilms.length === 0) return;

    const userFilm = userFilms.find(uf => uf.filmId === filmId);
    if (!userFilm) return;

    await deleteUserFilm(userFilm.id);

    alert(`Film dihapus.`);
  } catch (error) {
    console.error("Error to remove user film from Firestore:", error);
    return;
  }
}
