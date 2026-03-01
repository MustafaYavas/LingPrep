import { db } from "@/services/firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  orderBy,
} from "firebase/firestore";
import type { ListeningTask } from "../types";

export const listeningService = {
  async getTasks(level: string = "all"): Promise<ListeningTask[]> {
    const q = query(
      collection(db, "listening_tasks"),
      orderBy("unit_id", "asc"),
    );
    const querySnapshot = await getDocs(q);
    const tasks = querySnapshot.docs.map((doc) => doc.data() as ListeningTask);

    if (level === "all") {
      return tasks;
    }
    return tasks.filter((task) => task.level === level);
  },

  async getTask(level: string, unitId: number): Promise<ListeningTask | null> {
    const docId = `listening_${level}_unit_${unitId}`;
    const docRef = doc(db, "listening_tasks", docId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as ListeningTask) : null;
  },
};
