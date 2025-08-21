interface FirestoreValue {
  stringValue?: string;
  integerValue?: string;
  doubleValue?: number;
  booleanValue?: boolean;
  mapValue?: {
    fields: Record<string, FirestoreValue>;
  };
  arrayValue?: {
    values: FirestoreValue[];
  };
  nullValue?: null;
  timestampValue?: string;
  referenceValue?: string;
  geoPointValue?: {
    latitude: number;
    longitude: number;
  };
  bytesValue?: string;
}

interface FirestoreDocument {
  name: string;
  fields: Record<string, FirestoreValue>;
  createTime: string;
  updateTime: string;
}

export interface FirestoreResponse {
  documents: FirestoreDocument[];
}
