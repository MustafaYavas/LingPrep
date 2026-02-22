import { db } from "@/services/firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  orderBy,
} from "firebase/firestore";
import type { ReadingUnit } from "../types";

export const readingService = {
  async getUnits(): Promise<ReadingUnit[]> {
    const q = query(collection(db, "reading_units"), orderBy("unit_id", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data() as ReadingUnit);
  },

  async getUnit(unitId: number): Promise<ReadingUnit | null> {
    const docRef = doc(db, "reading_units", unitId.toString());
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as ReadingUnit) : null;
  },
};
