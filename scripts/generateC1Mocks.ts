import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import type { QuizUnit } from "./types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unitsData: any[] = [
  {
    id: 24,
    title: "Felsefe ve Varoluş",
    desc: "Nuanced Modals and Ontological Deduction",
    tests: [
      {
        id: "t1",
        title: "Test 1: Ontolojik Çıkarımlar",
        questions: [
          {
            id: "u24_t1_q1",
            type: "nuance_differentiation",
            difficulty: "expert",
            question_text:
              "His silence ______ (be) interpreted as consent, but knowing his character, it was more likely a sign of profound disagreement.",
            options: [
              "must have been",
              "could have been",
              "should have been",
              "was to have been",
            ],
            correct_answer: "could have been",
            explanation:
              "Birden fazla ihtimal arasından birini (yanlışlanabilir olanı) seçerken 'could have been' nüansı tercih edilir.",
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
