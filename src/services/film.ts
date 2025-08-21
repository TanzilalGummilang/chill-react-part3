import { apiUrl } from "../utils/constants";
import type { FirestoreResponse } from "./types";

export interface Film {
  image: string;
  title: string;
  rating: number;
  isNewEpisode: boolean,
  isTop10: boolean,
}

export interface StoredFilm extends Film {
  id: string;
}

export async function retrieveFilms(): Promise<StoredFilm[]> {
  try {
    const response = await fetch(`${apiUrl}/films`);
    if (!response.ok) {
      console.error(`Failed to fetch films: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json() as FirestoreResponse;
    if (!data || !data.documents) return [];

    return data.documents
      .map((doc) => {
        const id = doc.name.split("/").pop();
        const title = doc.fields.title.stringValue;
        const image = doc.fields.image.stringValue;
        const rating = doc.fields.rating.integerValue
          ? Number(doc.fields.rating.integerValue)
          : undefined;
        const isNewEpisode = doc.fields.isNewEpisode.booleanValue;
        const isTop10 = doc.fields.isTop10.booleanValue;

        if (!title || !image || rating === undefined || isNewEpisode === undefined || isTop10 === undefined) {
          return null;
        }

        return { id, title, image, rating, isNewEpisode, isTop10 };
      })
      .filter((f): f is StoredFilm => f !== null);
  } catch (error) {
    console.error("Error fetching films:", error);
    return [];
  }
}
