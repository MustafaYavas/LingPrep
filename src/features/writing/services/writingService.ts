import { db } from "@/services/firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  orderBy,
} from "firebase/firestore";
import type { WritingTask } from "../types";

export const writingService = {
  async getTasks(level: string = "all"): Promise<WritingTask[]> {
    const q = query(collection(db, "writing_tasks"), orderBy("unit_id", "asc"));
    const querySnapshot = await getDocs(q);
    const tasks = querySnapshot.docs.map((doc) => doc.data() as WritingTask);

    if (level === "all") {
      return tasks;
    }
    return tasks.filter((task) => task.level === level);
  },

  async getTask(level: string, unitId: number): Promise<WritingTask | null> {
    const docId = `writing_${level}_unit_${unitId}`;
    const docRef = doc(db, "writing_tasks", docId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as WritingTask) : null;
  },
};
