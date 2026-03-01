import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
import type { WritingTask, FirebaseConfig } from "./types";

dotenv.config();

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID,
} as any;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadWritingData() {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const levels = ["A1", "A2", "B1", "B2", "C1"];

    for (const level of levels) {
      const dataPath = path.resolve(
        __dirname,
        `../src/utils/mockData/writingData${level}.json`,
      );

      if (fs.existsSync(dataPath)) {
        const fileContent = fs.readFileSync(dataPath, "utf-8");
        const writingData: WritingTask[] = JSON.parse(fileContent);

        console.log(`Uploading ${level} writing tasks to Firestore...`);

        for (const task of writingData) {
          const docId = `writing_${level}_unit_${task.unit_id}`;
          const docRef = doc(db, "writing_tasks", docId);
          await setDoc(docRef, { ...task, level });
          console.log(`Uploaded unit ${docId}`);
        }

        console.log(`${level} writing data uploaded successfully!`);
      } else {
        console.warn(`File not found: ${dataPath}`);
      }
    }

    console.log("All writing data uploads completed successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error uploading writing data:", error);
    process.exit(1);
  }
}

uploadWritingData();
