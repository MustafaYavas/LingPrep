import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import type { QuizUnit } from "./types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unitsData: any[] = [
  {
    id: 12,
    title: "Modern Yaşam & Teknoloji",
    desc: "Present Continuous vs. Present Simple",
    tests: [
      {
        id: "t1",
        title: "Test 1: Alışkanlıklar vs. Şu An",
        questions: [
          {
            id: "u12_t1_q1",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context:
              "John usually ______ (work) from home, but this week he ______ (work) at the office because of a special project.",
            question_text: "Fill in the blanks correctly.",
            options: [
              "works / works",
              "is working / works",
              "works / is working",
              "is working / is working",
            ],
            correct_answer: "works / is working",
            explanation:
              "Genel alışkanlıklar için Present Simple, geçici durumlar için Present Continuous kullanılır.",
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
