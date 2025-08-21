export interface Constants {
  apiUrl: string | null;
}

export const apiUrl: Constants["apiUrl"] = import.meta.env.VITE_FIRESTORE_URL || null;