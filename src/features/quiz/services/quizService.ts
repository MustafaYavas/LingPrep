import { doc, getDoc } from "firebase/firestore";
import { db } from "@/services/firebase";
import type { QuizUnit } from "../types";

export const quizService = {
  async getUnit(unitId: number): Promise<QuizUnit> {
    try {
      const docRef = doc(db, "units", unitId.toString());
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data() as QuizUnit;
      }
      throw new Error(`Unit ${unitId} not found in database`);
    } catch (error) {
      console.error("Error fetching unit:", error);
      throw error;
    }
  },
};
