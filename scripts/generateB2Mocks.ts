import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import type { QuizUnit } from "./types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unitsData: any[] = [
  {
    id: 18,
    title: "Kişisel Gelişim",
    desc: "Gerunds & Infinitives",
    tests: [
      {
        id: "t1",
        title: "Test 1: Alışkanlıklar Analizi",
        questions: [
          {
            id: "u18_t1_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "I remember ______ (lock) the door, but I can't find my keys now.",
            options: ["locking", "to lock", "lock", "locked"],
            correct_answer: "locking",
            explanation:
              "Geçmişte yapılmış bir eylemi hatırlarken 'remember + Gerund' kullanılır.",
          },
          // ... more questions
        ],
      },
      // ... more tests
    ],
  },
  // ... more units
];

unitsData.forEach((unit) => {
  const fileContent = JSON.stringify(
    {
      unit_id: unit.id,
      unit_title: unit.title,
      tests: unit.tests,
    } as QuizUnit,
    null,
    2,
  );
  fs.writeFileSync(
    path.join(__dirname, `../src/utils/mockData/quizDataUnit${unit.id}.json`),
    fileContent,
    "utf-8",
  );
  console.log(`Unit ${unit.id} generated!`);
});
