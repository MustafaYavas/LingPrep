import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

import * as dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadData() {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    for (let i = 1; i <= 29; i++) {
      const dataPath = path.resolve(
        __dirname,
        `../src/utils/mockData/quizDataUnit${i}.json`,
      );

      if (fs.existsSync(dataPath)) {
        const fileContent = fs.readFileSync(dataPath, "utf-8");
        const quizData = JSON.parse(fileContent);

        const docId = quizData.unit_id.toString();
        console.log(`Uploading unit ${docId} to Firestore...`);

        const docRef = doc(db, "units", docId);
        await setDoc(docRef, quizData);

        console.log(`Unit ${docId} uploaded successfully!`);
      } else {
        console.warn(`File not found: ${dataPath}`);
      }
    }

    console.log("All uploads completed successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error uploading data:", error);
    process.exit(1);
  }
}

uploadData();
