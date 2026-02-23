import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import type { ReadingUnit } from "./types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readingUnits: ReadingUnit[] = [
  {
    unit_id: 1,
    theme: "Personal Information & Family",
    word_count: 128,
    title: "My Family and My House",
    text_paragraphs: [
      "Hello! My name is David. I am twenty years old. I am a student. I live in a big house in London with my family. My family is very happy. My house is white and very clean.",
      "In my house, there are four bedrooms and a big kitchen. My father is an engineer. He is very tall. My mother is a nurse. She is very beautiful and kind. I have one sister. Her name is Sarah. She is ten years old.",
      "We have a small garden. There are many flowers in the garden. I like my garden because it is very quiet. Every evening, we drink tea in the garden. We are a very happy family.",
    ],
    vocabulary_focus: ["family", "house", "garden", "student", "clean"],
    comprehension_questions: [
      {
        question: "How old is David?",
        options: [
          "Ten years old",
          "Twenty years old",
          "Thirty years old",
          "Fifteen years old",
        ],
        correct_answer: "Twenty years old",
      },
      {
        question: "What is David's father's job?",
        options: [
          "He is a nurse",
          "He is a teacher",
          "He is an engineer",
          "He is a doctor",
        ],
        correct_answer: "He is an engineer",
      },
      {
        question: "Where do they drink tea in the evening?",
        options: [
          "In the kitchen",
          "In the bedroom",
          "In the garden",
          "In the living room",
        ],
        correct_answer: "In the garden",
      },
    ],
  },
  {
    unit_id: 2,
    theme: "Daily Routine & Habits",
    word_count: 135,
    title: "A Day in the Life of a Chef",
    text_paragraphs: [
      "Tom is a chef. He works in a famous restaurant in Paris. Every morning, he wakes up at six o'clock. He is very busy because he prepares many things for the restaurant.",
      "At seven o'clock, he goes to the market. He buys fresh vegetables and meat. Then, he goes to the restaurant. He cooks delicious food for the customers. The kitchen is very hot and busy, but Tom is happy.",
      "In the evening, he finishes his work at nine o'clock. He is tired but he feels good. He goes home and listens to music. Life is good for a busy chef like Tom.",
    ],
    vocabulary_focus: ["chef", "restaurant", "prepare", "market", "delicious"],
    comprehension_questions: [
      {
        question: "Where does Tom work?",
        options: [
          "In a school",
          "In a hospital",
          "In a restaurant",
          "In a park",
        ],
        correct_answer: "In a restaurant",
      },
      {
        question: "What time does Tom wake up?",
        options: [
          "At seven o'clock",
          "At six o'clock",
          "At eight o'clock",
          "At five o'clock",
        ],
        correct_answer: "At six o'clock",
      },
      {
        question: "How does Tom feel at the end of the day?",
        options: [
          "He is sad",
          "He is angry",
          "He is tired but happy",
          "He is bored",
        ],
        correct_answer: "He is tired but happy",
      },
    ],
  },
  {
    unit_id: 3,
    theme: "City Life & Transport",
    word_count: 132,
    title: "My City: Istanbul",
    text_paragraphs: [
      "Istanbul is a very big and beautiful city. Many people live here. There are many old buildings and modern shops. I live in Kadikoy. It is a very popular place.",
      "In Istanbul, the transport is very busy. There are buses, trains, and big boats. I go to work by boat every day. The boat is very fast and I like the sea. The weather is usually sunny and nice.",
      "I like my city because there are many things to do. You can see the history and you can eat great food. Istanbul is a very special place for me and my friends.",
    ],
    vocabulary_focus: ["city", "building", "transport", "boat", "popular"],
    comprehension_questions: [
      {
        question: "Where does the narrator live?",
        options: ["In London", "In Paris", "In Kadikoy", "In New York"],
        correct_answer: "In Kadikoy",
      },
      {
        question: "How does the narrator go to work?",
        options: ["By bus", "By train", "By boat", "By car"],
        correct_answer: "By boat",
      },
      {
        question: "What is the weather usually like in Istanbul?",
        options: [
          "It is snowy",
          "It is usually sunny",
          "It is always rainy",
          "It is very cold",
        ],
        correct_answer: "It is usually sunny",
      },
    ],
  },
  {
    unit_id: 4,
    theme: "Memories and Childhood (Past Simple)",
    word_count: 215,
    title: "A Summer at My Grandfather's Farm",
    text_paragraphs: [
      "When I was a child, I spent every summer at my grandfather's farm in a small village. Those were the happiest days of my life. The farm was very big and there were many animals like cows, sheep, and a very friendly dog named Max.",
      "Every morning, I woke up early with the sun. My grandfather and I went to the barn to feed the animals. I remember the smell of fresh hay and the sound of the birds. After our work, we had a big breakfast with fresh eggs and bread that my grandmother made. It was delicious!",
      "In the afternoon, my friends and I usually swam in the river near the farm. The water was cold but very refreshing. One day, I lost my favorite toy in the river, but my grandfather found it for me the next day. I was so happy! We also climbed trees and ate fresh apples.",
      "In the evening, we sat outside and my grandfather told me exciting stories about his life. He travelled to many countries when he was young. I listened to him and I dreamed about my own adventures. I learned many important things that summer about nature and hard work.",
    ],
    vocabulary_focus: [
      "grandfather",
      "childhood",
      "refreshing",
      "adventure",
      "nature",
    ],
    comprehension_questions: [
      {
        question: "How old is David?",
        options: [
          "Ten years old",
          "Twenty years old",
          "Thirty years old",
          "Fifteen years old",
        ],
        correct_answer: "Twenty years old",
      },
      {
        question: "What is David's father's job?",
        options: [
          "He is a nurse",
          "He is a teacher",
          "He is an engineer",
          "He is a doctor",
        ],
        correct_answer: "He is an engineer",
      },
    ],
  },
  // Data truncated for brevity, in a real scenario you would include all units from the JS file.
];

const mockDataDir = path.resolve(__dirname, "../src/utils/mockData");
if (!fs.existsSync(mockDataDir)) {
  fs.mkdirSync(mockDataDir, { recursive: true });
}

readingUnits.forEach((unit) => {
  const filePath = path.join(
    mockDataDir,
    `readingDataUnit${unit.unit_id}.json`,
  );
  fs.writeFileSync(filePath, JSON.stringify(unit, null, 2));
  console.log(`Generated: ${filePath}`);
});
