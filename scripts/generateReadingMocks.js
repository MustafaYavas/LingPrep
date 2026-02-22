import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readingUnits = [
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
        question: "Where did the author spend their childhood summers?",
        options: [
          "In a big city",
          "At a grandfather's farm",
          "In a school camp",
          "Near a beach",
        ],
        correct_answer: "At a grandfather's farm",
      },
      {
        question: "What was the name of the friendly dog?",
        options: ["Rex", "Max", "Buddy", "Charlie"],
        correct_answer: "Max",
      },
      {
        question: "What did the author do in the afternoon with friends?",
        options: [
          "Fed the animals",
          "Ate breakfast",
          "Swam in the river",
          "Listened to stories",
        ],
        correct_answer: "Swam in the river",
      },
      {
        question: "Who found the author's lost toy?",
        options: [
          "The grandmother",
          "A friend",
          "The grandfather",
          "Max the dog",
        ],
        correct_answer: "The grandfather",
      },
      {
        question: "What kind of stories did the grandfather tell?",
        options: [
          "Fairy tales",
          "Stories about his life",
          "Funny jokes",
          "Ghost stories",
        ],
        correct_answer: "Stories about his life",
      },
    ],
  },
  {
    unit_id: 5,
    theme: "Life Experiences (Present Perfect)",
    word_count: 208,
    title: "The World Traveler",
    text_paragraphs: [
      "My aunt Julia is a famous journalist and she has travelled to more than fifty countries. She has seen many beautiful places and she has met many interesting people. For ten years, she has written stories about her adventures for a popular magazine.",
      "She has already visited the Great Wall of China and the pyramids in Egypt. She says that the pyramids are the most impressive things she has ever seen. However, she hasn't visited Australia yet. She is planning to go there next month to see the kangaroos.",
      "Julia has eaten many strange foods during her travels. She has tried insects in Thailand and very spicy soup in Mexico. She has never been afraid of trying new things because she thinks that life is an adventure. She has learned five different languages, including Spanish and French.",
      "I have always admired my aunt's courage. She has shown me that the world is very big and exciting. I haven't travelled as much as her, but I have started to save money for my first big trip. I hope to be as brave as her one day.",
    ],
    vocabulary_focus: [
      "journalist",
      "impressive",
      "adventure",
      "courage",
      "traveler",
    ],
    comprehension_questions: [
      {
        question: "How many countries has Aunt Julia visited?",
        options: [
          "Ten countries",
          "Fifteen countries",
          "More than fifty",
          "Five countries",
        ],
        correct_answer: "More than fifty",
      },
      {
        question: "What is the most impressive thing she has seen?",
        options: [
          "The kangaroos",
          "The pyramids in Egypt",
          "The Great Wall of China",
          "The Amazon forest",
        ],
        correct_answer: "The pyramids in Egypt",
      },
      {
        question: "Which place has she NOT visited yet?",
        options: ["Thailand", "Mexico", "China", "Australia"],
        correct_answer: "Australia",
      },
      {
        question: "Why isn't she afraid of trying new things?",
        options: [
          "Because she is a journalist",
          "Because she thinks life is an adventure",
          "Because she speaks five languages",
          "Because she is famous",
        ],
        correct_answer: "Because she thinks life is an adventure",
      },
      {
        question: "What has the author started to do?",
        options: [
          "Learn five languages",
          "Write for a magazine",
          "Save money for a trip",
          "Visit China",
        ],
        correct_answer: "Save money for a trip",
      },
    ],
  },
  {
    unit_id: 6,
    theme: "City Comparisons (Comparatives)",
    word_count: 218,
    title: "Choosing a New Home",
    text_paragraphs: [
      "Last month, my family and I decided to move to a new city. We had to choose between two places: Silverton and Goldville. We visited both cities to see which one was better for our lifestyle. Both cities are very different from each other.",
      "Silverton is much older than Goldville. It has many historical buildings and narrow streets. The people there are very friendly, but the city is quite small. On the other hand, Goldville is more modern and much bigger. It has huge shopping malls, cinema complexes, and more parks.",
      "The cost of living in Silverton is cheaper than in Goldville. My parents found a lovely house in Silverton that was much more affordable than the apartments in Goldville. However, Goldville has better transport. The trains are faster and there are more buses. It is easier to travel around the city.",
      "Our final decision was Silverton because it is quieter and safer for my younger sister. Although Goldville is more exciting, we prefer the peaceful atmosphere of Silverton. We are going to move there next week and we are all very excited about our new life in this beautiful town.",
    ],
    vocabulary_focus: [
      "historical",
      "affordable",
      "lifestyle",
      "atmosphere",
      "modern",
    ],
    comprehension_questions: [
      {
        question: "What was the family deciding between?",
        options: ["Two houses", "Two countries", "Two cities", "Two jobs"],
        correct_answer: "Two cities",
      },
      {
        question: "Which city is older and has historical buildings?",
        options: ["Goldville", "Silverton", "Both of them", "Neither of them"],
        correct_answer: "Silverton",
      },
      {
        question: "What is cheaper in Silverton according to the text?",
        options: [
          "Transport",
          "The cost of living",
          "Shopping malls",
          "The trains",
        ],
        correct_answer: "The cost of living",
      },
      {
        question: "Why does Goldville have better transport?",
        options: [
          "Because it is smaller",
          "Because the streets are narrow",
          "Because the trains are faster",
          "Because it is cheaper",
        ],
        correct_answer: "Because the trains are faster",
      },
      {
        question: "Why did the family choose Silverton in the end?",
        options: [
          "Because it is bigger",
          "Because it is more modern",
          "Because it is quieter and safer",
          "Because it has more cinemas",
        ],
        correct_answer: "Because it is quieter and safer",
      },
    ],
  },
  {
    unit_id: 7,
    theme: "Modern Life & Changing Trends",
    word_count: 335,
    title: "The Evolution of Remote Work",
    text_paragraphs: [
      "In recent years, the way we work has changed significantly due to advancements in technology and shifting social attitudes. While traditional offices were once the only option for most professionals, remote work is now becoming a permanent feature of modern life. This transition is not just a temporary trend, but a fundamental shift that is being embraced by both employees and employers worldwide.",
      "One of the primary advantages of remote work is the flexibility it offers. Many workers, who used to spend hours commuting to city centers, are now finding that they can be more productive from the comfort of their own homes. This change allows people to manage their time more effectively, balancing professional responsibilities with personal life. Studies have suggested that employees who work remotely are often more satisfied with their jobs, which leads to higher retention rates for companies.",
      "However, the move to digital workspaces is not without its challenges. Communication, which was once handled through face-to-face meetings, is now conducted through video calls and instant messaging apps. This can sometimes lead to feelings of isolation among team members who miss the social interaction of a physical office. Furthermore, the boundary between work and home can become blurred, making it difficult for some individuals to 'switch off' at the end of the day.",
      "From an employer's perspective, remote work presents an opportunity to reduce costs. Expensive office spaces, which are located in prime urban areas, are being downsized or replaced with smaller hubs. This allows businesses to invest more in technology and employee development rather than real estate. Additionally, companies are now able to recruit talent from any part of the world, which was previously impossible due to geographical constraints.",
      "In conclusion, while the traditional office will likely continue to exist, the rise of remote work is reshaping our understanding of professional life. As we move forward, a hybrid model that combines the benefits of both environments is expected to become the new standard. This evolution requires us to adapt our skills and mindsets to thrive in a digital age that is constantly evolving.",
    ],
    vocabulary_focus: [
      "evolution",
      "flexibility",
      "commuting",
      "retention",
      "geographical",
      "constraints",
      "hybrid",
      "mindset",
    ],
    comprehension_questions: [
      {
        question: "What has primarily caused the change in the way we work?",
        options: [
          "Cheaper office spaces",
          "Advancements in technology",
          "Less social interaction",
          "Smaller city centers",
        ],
        correct_answer: "Advancements in technology",
      },
      {
        question: "Why are some remote workers more productive?",
        options: [
          "Because they avoid commuting",
          "Because they have more meetings",
          "Because they work longer hours",
          "Because they live in city centers",
        ],
        correct_answer: "Because they avoid commuting",
      },
      {
        question:
          "What is a common challenge mentioned regarding digital workspaces?",
        options: [
          "Higher costs for workers",
          "Reduced productivity",
          "Feelings of isolation",
          "Limited recruitment",
        ],
        correct_answer: "Feelings of isolation",
      },
      {
        question:
          "What does the text suggest about the 'boundary between work and home'?",
        options: [
          "It is clearer than before",
          "It can become blurred",
          "It is unimportant",
          "It helps with communication",
        ],
        correct_answer: "It can become blurred",
      },
      {
        question: "How do employers benefit financially from remote work?",
        options: [
          "By hiring more local talent",
          "By downsizing expensive office spaces",
          "By increasing video calls",
          "By selling technology",
        ],
        correct_answer: "By downsizing expensive office spaces",
      },
      {
        question: "What new ability do companies have regarding recruitment?",
        options: [
          "They can only hire people who live nearby",
          "They can recruit talent globally",
          "They must hire fewer employees",
          "They only hire technology experts",
        ],
        correct_answer: "They can recruit talent globally",
      },
      {
        question: "What is predicted to become the new standard for work?",
        options: [
          "A fully traditional office model",
          "A hybrid model",
          "Working only in city centers",
          "A model without technology",
        ],
        correct_answer: "A hybrid model",
      },
      {
        question:
          "Which word best describes the shift to remote work according to the conclusion?",
        options: ["Temporary", "Evolution", "Accidental", "Unprofitable"],
        correct_answer: "Evolution",
      },
    ],
  },
  {
    unit_id: 8,
    theme: "Social Issues & Environment (Passive Voice Focus)",
    word_count: 328,
    title: "The Global Impact of Plastic Pollution",
    text_paragraphs: [
      "Every year, millions of tons of plastic are produced by factories around the world. Unfortunately, a vast amount of this material is not recycled properly and is discarded into our oceans. This global issue is now being addressed by governments and environmental organizations, but the damage that has already been caused is significant.",
      "Marine life is severely affected by the presence of microplastics. These tiny particles are often consumed by fish, which are later caught and eaten by humans. In this way, the pollution that is created in our oceans is eventually returned to our own food chain. Many endangered species are threatened by large plastic items, such as nets and bags, which are left in the water by fishing boats and tourists.",
      "In many countries, new laws are being introduced to limit the use of single-use plastics. Plastic straws and bags are being banned in several major cities, and businesses are being encouraged to find sustainable alternatives. These initiatives are supported by many citizens who are concerned about the future of the planet. Educational programs are also being developed to teach children about the importance of recycling and conservation.",
      "Renewable energy and biodegradable materials are seen as the key to a cleaner future. Research is being conducted by scientists to create plastics that can be broken down naturally by bacteria. If these new materials are widely adopted, the amount of permanent waste that is generated by our society will be greatly reduced.",
      "However, individual action is also required to solve this problem. If plastic is recycled at home and less waste is produced by every household, a positive change can be achieved. We are reminded by experts that the health of our environment is shared by everyone, and our choices today will determine the world that is inherited by future generations.",
    ],
    vocabulary_focus: [
      "discarded",
      "addressed",
      "impact",
      "threatened",
      "sustainable",
      "initiatives",
      "biodegradable",
      "inherited",
    ],
    comprehension_questions: [
      {
        question: "What happens to a vast amount of plastic material?",
        options: [
          "It is all recycled",
          "It is discarded into oceans",
          "It is used for energy",
          "It is stored in factories",
        ],
        correct_answer: "It is discarded into oceans",
      },
      {
        question: "How do microplastics enter the human food chain?",
        options: [
          "Through drinking water",
          "By breathing",
          "When fish consume them and humans eat fish",
          "By visiting the beach",
        ],
        correct_answer: "When fish consume them and humans eat fish",
      },
      {
        question:
          "What specific plastic items are being banned in some cities?",
        options: [
          "Computers and phones",
          "Straws and bags",
          "Fishing nets",
          "Car parts",
        ],
        correct_answer: "Straws and bags",
      },
      {
        question: "Who supports the initiatives to limit plastic use?",
        options: [
          "Only scientists",
          "Concerned citizens",
          "Factory owners",
          "Only children",
        ],
        correct_answer: "Concerned citizens",
      },
      {
        question:
          "What is the goal of the research mentioned in the 4th paragraph?",
        options: [
          "To build more factories",
          "To create faster fish",
          "To create naturally degradable plastics",
          "To increase plastic production",
        ],
        correct_answer: "To create naturally degradable plastics",
      },
      {
        question:
          "What will happen if new biodegradable materials are adopted?",
        options: [
          "Permanent waste will be reduced",
          "Pollution will increase",
          "Recycling will stop",
          "Oceans will become smaller",
        ],
        correct_answer: "Permanent waste will be reduced",
      },
      {
        question: "What is required in addition to government laws?",
        options: [
          "More plastic production",
          "Individual action",
          "Faster boats",
          "More computers",
        ],
        correct_answer: "Individual action",
      },
      {
        question: "What determines the world inherited by future generations?",
        options: [
          "Our choices today",
          "Only government laws",
          "The size of the ocean",
          "Biological evolution",
        ],
        correct_answer: "Our choices today",
      },
    ],
  },
  {
    unit_id: 9,
    theme: "Experience & Time (Present Perfect Focus)",
    word_count: 341,
    title: "Life in the High Andes",
    text_paragraphs: [
      "For centuries, the people of the Andes mountains have adapted to one of the most challenging environments on Earth. Living at high altitudes, where the oxygen is thin and the weather is unpredictable, they have developed unique traditions and lifestyles. Modern explorers have often wondered how these communities have survived for so long in such isolation.",
      "Juan is a local guide who has lived in a small village near Cusco since he was born. He has seen many changes in his community over the last twenty years. While tourism has increased, the core values of his people have remained the same. 'We have always respected the mountains,' he says, 'because they have provided us with water and protection for generations.'",
      "Agriculture has been the foundation of life in the Andes for thousands of years. Farmers have successfully grown hundreds of types of potatoes and grains like quinoa in the steep terraces. They have used traditional methods that have been passed down from their ancestors. This ancient knowledge has helped them to maintain a sustainable food supply even during difficult seasons.",
      "In recent years, many young people have moved to the cities to find better education and jobs. However, many have also returned to their villages because they have missed the sense of community. They have brought back new ideas and technologies, such as solar panels, which have improved the quality of life without destroying their heritage.",
      "Archaeologists have discovered many fascinating ruins in this region, including the famous Machu Picchu. These sites have shown us how advanced the Inca civilization was. Since these discoveries were made, the world has looked at the Andes with great admiration. For the locals, these ruins are not just tourist attractions, but a symbol of the strength that has defined their history.",
    ],
    vocabulary_focus: [
      "altitudes",
      "unpredictable",
      "isolation",
      "foundation",
      "terraces",
      "ancestors",
      "heritage",
      "admiration",
    ],
    comprehension_questions: [
      {
        question: "How long have people lived in the Andes mountains?",
        options: [
          "For a few years",
          "For centuries",
          "Since last week",
          "For ten years",
        ],
        correct_answer: "For centuries",
      },
      {
        question: "What has been a constant value for the Andean people?",
        options: [
          "Living in cities",
          "Respect for the mountains",
          "Modern technology",
          "Ignoring history",
        ],
        correct_answer: "Respect for the mountains",
      },
      {
        question: "What has agriculture provided for thousands of years?",
        options: [
          "A foundation for life",
          "A way to escape",
          "Only one type of potato",
          "Modern machinery",
        ],
        correct_answer: "A foundation for life",
      },
      {
        question: "How have farmers maintained a sustainable food supply?",
        options: [
          "By buying food from cities",
          "By using ancient knowledge and terraces",
          "By moving to lower altitudes",
          "By stopping agriculture",
        ],
        correct_answer: "By using ancient knowledge and terraces",
      },
      {
        question: "Why have some young people returned to their villages?",
        options: [
          "Because they failed in school",
          "Because they missed the community",
          "Because the cities were too small",
          "Because there were no jobs",
        ],
        correct_answer: "Because they missed the community",
      },
      {
        question: "How have solar panels affected the quality of life?",
        options: [
          "They have destroyed heritage",
          "They have improved life without destroying heritage",
          "They have made life more difficult",
          "They have attracted too many tourists",
        ],
        correct_answer: "They have improved life without destroying heritage",
      },
      {
        question: "What is Machu Picchu to the local people?",
        options: [
          "Just a tourist attraction",
          "A symbol of history and strength",
          "A new shopping mall",
          "A place they have never seen",
        ],
        correct_answer: "A symbol of history and strength",
      },
      {
        question: "What has Juan observed over the last twenty years?",
        options: [
          "Tourism has decreased",
          "Many changes in his community",
          "The mountains have disappeared",
          "Water has run out",
        ],
        correct_answer: "Many changes in his community",
      },
    ],
  },
  {
    unit_id: 10,
    theme: "Personal Growth & Psychology (Gerunds & Infinitives)",
    word_count: 432,
    title: "Mastering the Art of Habit Formation",
    text_paragraphs: [
      "Understanding the psychology behind habit formation is essential for anyone seeking to improve their personal or professional life. We often find ourselves struggling to maintain new routines, primarily because we fail to recognize the cognitive patterns that govern our behavior. Modern research suggests that forming a habit is not merely about having strong willpower; instead, it involves creating a sustainable environment that encourages positive actions. To achieve long-term success, one must learn how to navigate the complex relationship between motivation and discipline.",
      "The process usually begins by identifying a 'cue'—a specific trigger that tells your brain to go into automatic mode. For instance, successfully starting a morning exercise routine might depend on placing your running shoes next to your bed the night before. By doing so, you are effectively reducing the friction required to begin the task. Avoiding common pitfalls, such as setting overly ambitious goals too quickly, is also crucial. It is often better to focus on making small, incremental changes rather than attempting to transform your entire lifestyle overnight.",
      "Furthermore, the importance of 'rewarding' oneself cannot be overstated. When we complete a desired action, our brain releases dopamine, which reinforces the behavior. However, it is important to distinguish between healthy rewards and those that might undermine our progress. For example, if you are trying to lose weight, rewarding yourself with a sugary snack after a workout might be counterproductive. Learning to enjoy the process itself, rather than just the end result, is a skill that takes time to develop, but it eventually leads to a more fulfilling experience.",
      "Many experts recommend 'habit stacking' as a powerful technique for integration. This involves attaching a new habit to an existing one that is already firmly established. For instance, if you want to practice mindfulness, you might decide to meditate for five minutes immediately after brushing your teeth. This strategy leverages the neural pathways that are already strong in your brain, making it much easier to remember and execute the new behavior. Consequently, the new habit becomes an extension of your daily life without requiring an immense amount of mental energy.",
      "Nevertheless, we must be prepared to face setbacks. Life is unpredictable, and there will inevitably be days when we fail to follow our routines. The key is in refusing to let a single failure define our overall progress. Instead of giving up, successful individuals choose to analyze why the lapse occurred and adjust their strategy accordingly. Developing resilience is just as important as the habits themselves. By persisting through challenges, we strengthen our character and increase our chances of reaching our ultimate goals.",
    ],
    vocabulary_focus: [
      "cognitive",
      "willpower",
      "sustainable",
      "incremental",
      "counterproductive",
      "mindfulness",
      "leverages",
      "resilience",
    ],
    comprehension_questions: [
      {
        question:
          "What is the primary reason people struggle to maintain new routines?",
        options: [
          "Lack of money",
          "Failing to recognize cognitive patterns",
          "Not having enough time",
          "Physical exhaustion",
        ],
        correct_answer: "Failing to recognize cognitive patterns",
      },
      {
        question:
          "What does the text suggest about willpower in habit formation?",
        options: [
          "It is the only thing you need",
          "It is less important than a sustainable environment",
          "It is usually fake",
          "It decreases with age",
        ],
        correct_answer: "It is less important than a sustainable environment",
      },
      {
        question:
          "How does placing running shoes next to the bed help with a routine?",
        options: [
          "It makes the room cleaner",
          "It reduces friction to begin the task",
          "It improves sleep quality",
          "It saves space",
        ],
        correct_answer: "It reduces friction to begin the task",
      },
      {
        question:
          "What is an example of a pitfall in habit formation mentioned in the text?",
        options: [
          "Drinking too much water",
          "Setting overly ambitious goals too quickly",
          "Talking to friends",
          "Reading too many books",
        ],
        correct_answer: "Setting overly ambitious goals too quickly",
      },
      {
        question: "Why is the brain's release of dopamine significant?",
        options: [
          "It causes sleepiness",
          "It reinforces the behavior",
          "It reduces hunger",
          "It improves eyesight",
        ],
        correct_answer: "It reinforces the behavior",
      },
      {
        question: "What is 'habit stacking'?",
        options: [
          "Doing many habits at the same time",
          "Attaching a new habit to an existing one",
          "Stacking books in a specific order",
          "Waking up early",
        ],
        correct_answer: "Attaching a new habit to an existing one",
      },
      {
        question: "How does habit stacking benefit the brain?",
        options: [
          "It creates new neural pathways immediately",
          "It leverages existing strong neural pathways",
          "It makes the brain larger",
          "It reduces the need for sleep",
        ],
        correct_answer: "It leverages existing strong neural pathways",
      },
      {
        question: "What should we do when we face setbacks?",
        options: [
          "Give up immediately",
          "Refuse to let a single failure define progress",
          "Change our goals to something easier",
          "Wait for someone to help us",
        ],
        correct_answer: "Refuse to let a single failure define progress",
      },
      {
        question:
          "Which word is used in the text to describe the ability to persist through challenges?",
        options: ["Willpower", "Resilience", "Mindfulness", "Incremental"],
        correct_answer: "Resilience",
      },
      {
        question:
          "What is the overall tone of the author regarding habit formation?",
        options: [
          "Skeptical and discouraging",
          "Analytical and encouraging",
          "Aggressive and demanding",
          "Indifferent",
        ],
        correct_answer: "Analytical and encouraging",
      },
    ],
  },
  {
    unit_id: 11,
    theme: "Crime & Justice (Modals of Deduction)",
    word_count: 441,
    title: "The Mystery of the Vanishing Masterpiece",
    text_paragraphs: [
      "The theft of the 'Blue Aurora' from the National Gallery last Tuesday has left investigators baffled. The painting, which is valued at over fifty million dollars, disappeared during a brief ten-minute window when the security systems were being upgraded. The thief must have known about the security gap, as there were no signs of forced entry. Furthermore, the specialized sensors in the room might have been deactivated manually, suggesting an inside job.",
      "Detective Sarah Miller, the lead investigator on the case, believes the perpetrator could have escaped through the ventilation shafts. 'The security cameras show no one entering or leaving through the main doors during that time,' she explained. 'Therefore, the thief must have been someone small and agile, or perhaps they had access to a master key that bypassed the electronic logs.' Every employee who was on duty that night is currently being questioned, but no clear suspect has emerged yet.",
      "Some experts suggest that the painting might have already been smuggled out of the country. If the heist was planned by an international syndicate, they would have had the resources to transport it across borders quickly. Nevertheless, other investigators argue that the thief might have hidden it somewhere within the gallery itself. 'It can't have been easy to carry a large canvas without being noticed,' said one guard. 'The thief might have been hiding in the building even before the gallery closed for the night.'",
      "The security breach must have required months of preparation. To bypass such a sophisticated system, the criminal would have needed detailed blueprints of the museum. This has led the police to scrutinize the construction company that recently renovated the East Wing. They might have inadvertently leaked sensitive information, or a disgruntled former employee might have sold the plans to a criminal organization. Consequently, the investigation has now expanded to include several corporate entities.",
      "As of today, the 'Blue Aurora' remains missing, and the public is increasingly concerned about the safety of other national treasures. The museum director expressed his deep regret, stating that they should have implemented stricter protocols during the transition. While the mystery continues, one thing is certain: the thief must have been incredibly bold to execute such a high-stakes crime in the heart of the capital. The search for the masterpiece continues, with the hope that it might eventually be recovered before it disappears into the underground art market forever.",
    ],
    vocabulary_focus: [
      "baffled",
      "perpetrator",
      "agile",
      "bypassed",
      "smuggled",
      "scrutinize",
      "disgruntled",
      "sophisticated",
    ],
    comprehension_questions: [
      {
        question: "When did the 'Blue Aurora' disappear?",
        options: [
          "During the night",
          "When security systems were being upgraded",
          "During a crowded event",
          "On a Monday morning",
        ],
        correct_answer: "When security systems were being upgraded",
      },
      {
        question:
          "Why do investigators think the thief knew about the security gap?",
        options: [
          "They found a note",
          "There were no signs of forced entry",
          "A witness saw the thief",
          "The thief told the police",
        ],
        correct_answer: "There were no signs of forced entry",
      },
      {
        question:
          "What does the deactivation of sensors suggest to investigators?",
        options: [
          "The sensors were broken",
          "It was an inside job",
          "The thief was a ghost",
          "The electricity was out",
        ],
        correct_answer: "It was an inside job",
      },
      {
        question:
          "How does Detective Miller think the thief might have escaped?",
        options: [
          "Through the main doors",
          "By jumping out of a window",
          "Through the ventilation shafts",
          "In a delivery truck",
        ],
        correct_answer: "Through the ventilation shafts",
      },
      {
        question:
          "What characteristic might the thief have according to Miller?",
        options: [
          "Strong and tall",
          "Small and agile",
          "Old and slow",
          "Well-dressed",
        ],
        correct_answer: "Small and agile",
      },
      {
        question: "What is one theory about the painting's location?",
        options: [
          "It was destroyed",
          "It is hidden within the gallery",
          "The museum director has it",
          "It was sold to the government",
        ],
        correct_answer: "It is hidden within the gallery",
      },
      {
        question: "Why is the police investigating the construction company?",
        options: [
          "They might have stolen it",
          "They might have leaked sensitive information",
          "They owe money to the gallery",
          "They are moving to another country",
        ],
        correct_answer: "They might have leaked sensitive information",
      },
      {
        question: "What does the museum director regret?",
        options: [
          "Buying the painting",
          "Hiring Detective Miller",
          "Not having stricter protocols",
          "Closing the museum",
        ],
        correct_answer: "Not having stricter protocols",
      },
      {
        question:
          "Which word in the text describes someone who is unhappy and annoyed?",
        options: ["Agile", "Disgruntled", "Sophisticated", "Baffled"],
        correct_answer: "Disgruntled",
      },
      {
        question: "What is the primary goal of the investigation now?",
        options: [
          "To buy a new painting",
          "To recover the masterpiece",
          "To fire all the guards",
          "To move the gallery",
        ],
        correct_answer: "To recover the masterpiece",
      },
    ],
  },
  {
    unit_id: 12,
    theme: "Science & Ethics (Conditionals)",
    word_count: 448,
    title: "The Ethics of Artificial Intelligence",
    text_paragraphs: [
      "The rapid development of Artificial Intelligence (AI) has sparked a global debate about the future of humanity. If scientists hadn't made significant breakthroughs in machine learning a decade ago, we wouldn't be facing these complex ethical questions today. While AI offers incredible benefits, such as improved medical diagnoses and more efficient transport systems, its potential risks cannot be ignored. The way we choose to regulate this technology now will define the world for generations to come.",
      "If AI were to surpass human intelligence in every field, what would happen to our society? This 'singularity' event is a topic of intense discussion among researchers and philosophers. Some argue that if we created a truly superintelligent machine, it could help us solve problems like climate change and poverty. However, others worry that if we didn't implement sufficient safeguards, the AI might act in ways that are harmful to humans. Therefore, establishing a clear framework for AI safety is of utmost importance.",
      "The issue of job displacement is another major concern. If more industries adopted autonomous systems, many people would lose their livelihoods. This transition could lead to social instability if governments weren't prepared to provide support and retraining for the workforce. If we had anticipated these changes more effectively in the past, we might have been better prepared for the current wave of automation. Consequently, there is a growing demand for policies like Universal Basic Income to mitigate the economic impact.",
      "Furthermore, the use of AI in decision-making processes raises questions about bias and transparency. If an AI algorithm is trained on biased data, it will inevitably produce biased results. This has already been observed in areas such as hiring and law enforcement. If we continue to rely on 'black box' systems without understanding how they make decisions, we will risk perpetuating social injustices. We must demand that AI systems are developed with fairness and accountability as core principles.",
      "Finally, the development of autonomous weapons is perhaps the most dangerous application of AI. If a global arms race in AI weapons were to start, it would pose a grave threat to international security. If leaders had signed treaties to ban these weapons earlier, the world would be a much safer place today. In conclusion, the genetic revolution and the rise of AI represent a double-edged sword. If we use these technologies wisely, we can create a better future, but if we fail to act ethically, the consequences could be disastrous.",
    ],
    vocabulary_focus: [
      "breakthrough",
      "singularily",
      "safeguards",
      "displacement",
      "mitigate",
      "transparency",
      "perpetuating",
      "disastrous",
    ],
    comprehension_questions: [
      {
        question: "What sparked the global debate about AI?",
        options: [
          "The economic crisis",
          "The rapid development of AI",
          "Space exploration",
          "Ocean pollution",
        ],
        correct_answer: "The rapid development of AI",
      },
      {
        question:
          "What would the world be like if breakthroughs hadn't happened a decade ago?",
        options: [
          "It would be more advanced",
          "We wouldn't be facing complex ethical questions today",
          "AI would be more dangerous",
          "Everyone would have a job",
        ],
        correct_answer: "We wouldn't be facing complex ethical questions today",
      },
      {
        question: "What is the 'singularity' according to the text?",
        options: [
          "A single computer",
          "An event where AI surpasses human intelligence",
          "A new type of galaxy",
          "The end of the internet",
        ],
        correct_answer: "An event where AI surpasses human intelligence",
      },
      {
        question:
          "How could a superintelligent machine potentially help humanity?",
        options: [
          "By creating more movies",
          "By solving problems like climate change and poverty",
          "By replacing all human jobs",
          "By building faster rockets",
        ],
        correct_answer: "By solving problems like climate change and poverty",
      },
      {
        question: "What is a major concern mentioned regarding industries?",
        options: [
          "High costs of electricity",
          "Job displacement due to autonomous systems",
          "Lack of raw materials",
          "Too many holidays",
        ],
        correct_answer: "Job displacement due to autonomous systems",
      },
      {
        question:
          "What might have helped us prepare for automation according to the text?",
        options: [
          "If we had anticipated changes more effectively in the past",
          "If we had built more schools",
          "If we had stopped using electricity",
          "If we had hired more people",
        ],
        correct_answer:
          "If we had anticipated changes more effectively in the past",
      },
      {
        question: "Why do AI algorithms produce biased results sometimes?",
        options: [
          "Because they are too fast",
          "Because they are trained on biased data",
          "Because they don't like humans",
          "Because they are expensive",
        ],
        correct_answer: "Because they are trained on biased data",
      },
      {
        question: "What is the risk of using 'black box' systems?",
        options: [
          "They might explode",
          "They risk perpetuating social injustices",
          "They are too easy to hack",
          "They use too much energy",
        ],
        correct_answer: "They risk perpetuating social injustices",
      },
      {
        question:
          "What would have happened if leaders had banned AI weapons earlier?",
        options: [
          "The world would be more dangerous",
          "The world would be a much safer place today",
          "We would have no electricity",
          "Computers would be cheaper",
        ],
        correct_answer: "The world would be a much safer place today",
      },
      {
        question:
          "According to the conclusion, what determines if AI creates a better future?",
        options: [
          "If we have more computers",
          "If we use technology wisely and ethically",
          "If we stop all research",
          "If we hire more scientists",
        ],
        correct_answer: "If we use technology wisely and ethically",
      },
    ],
  },
  {
    unit_id: 13,
    theme: "Philosophy & Existence (Nuanced Modals)",
    word_count: 572,
    title: "The Ontological Pursuit of Purpose",
    text_paragraphs: [
      "For millennia, the question of human purpose has remained the central pillar of philosophical inquiry, weaving through the fabric of every major civilization. We could have chosen to view our existence as a mere biological accident, yet humanity has consistently reached for a higher meaning. This existential drive might have been the catalyst for our greatest artistic achievements, or it could simply be a sophisticated survival mechanism. To understand why we seek purpose, one must delve into the nuanced intersections of consciousness and reality.",
      "Consider the possibility that if we had never developed self-awareness, the concept of 'meaning' would never have surfaced. It is our ability to reflect on our own mortality that forces us to question the value of our actions. Some philosophers argue that we should have embraced the absurdity of life earlier, as doing so might have liberated us from the burden of expectation. Nevertheless, others maintain that the pursuit of purpose is what defines us as a species. This persistent search suggests that there must be something inherently significant about the human experience, even if that significance remains elusive.",
      "In modern times, the search for meaning has often been redirected toward professional success and material accumulation. However, many individuals who have achieved great wealth still find themselves feeling empty. This suggests that they might have misplaced their focus, neglecting the deeper, psychological needs that truly sustain us. If we were to re-evaluate our priorities, we might discover that purpose is found not in what we possess, but in how we contribute to the well-being of others. This shift in perspective could have profound implications for our individual and collective happiness.",
      "Furthermore, the role of community in providing a sense of purpose cannot be ignored. Human beings are inherently social creatures, and our identities are often shaped by our relationships with others. In societies where communal ties are strong, individuals are less likely to experience the profound sense of isolation that characterizes much of modern life. We might have underestimated the importance of these connections in our quest for autonomy. By fostering stronger social bonds, we could potentially solve many of the mental health challenges that face us today.",
      "The fast-paced nature of the digital age has further complicated our ontological journey. Constant connectivity and the pressure to perform have created a culture of perpetual distraction. We might be losing the ability to engage in the deep, quiet reflection that is necessary for spiritual growth. If we don't learn to cultivate moments of stillness, we run the risk of becoming hollow versions of ourselves. We should have recognized the dangers of this technological overload sooner, but it is not too late to re-establish a balance between our online and offline worlds.",
      "Ultimately, the pursuit of purpose is a deeply personal endeavor that requires courage and honesty. There is no single answer that will satisfy everyone, as each individual must find their own path. We might have hoped for a universal roadmap, but the beauty of existence lies in its diversity of experience. As we navigate the complexities of the 21st century, we must remain open to new ideas and perspectives. By doing so, we might finally come to understand that the journey itself is the true purpose of our lives.",
    ],
    vocabulary_focus: [
      "millennia",
      "ontological",
      "catalyst",
      "mortality",
      "liberated",
      "absurdity",
      "accumulation",
      "autonomy",
      "perpetual",
      "endeavor",
    ],
    comprehension_questions: [
      {
        question:
          "What has been the 'central pillar of philosophical inquiry' for millennia?",
        options: [
          "The biological evolution of species",
          "The question of human purpose",
          "The development of technology",
          "The study of ancient art",
        ],
        correct_answer: "The question of human purpose",
      },
      {
        question:
          "How does the author describe the potential reasons for our existential drive?",
        options: [
          "As a recent religious development",
          "As a biological accident or survival mechanism",
          "As a waste of time",
          "As a fully understood scientific fact",
        ],
        correct_answer: "As a biological accident or survival mechanism",
      },
      {
        question:
          "What ability, according to the text, forces us to question the value of our actions?",
        options: [
          "The ability to speak multiple languages",
          "The ability to reflect on our own mortality",
          "The ability to use tools",
          "The ability to build large cities",
        ],
        correct_answer: "The ability to reflect on our own mortality",
      },
      {
        question:
          "What might have happened if we had embraced the 'absurdity of life' earlier?",
        options: [
          "We would have become more religious",
          "We might have been liberated from expectation",
          "We would have built more factories",
          "We would have lost our artistic skills",
        ],
        correct_answer: "We might have been liberated from expectation",
      },
      {
        question: "Why do some wealthy individuals still feel 'empty'?",
        options: [
          "They don't have enough money",
          "They might have misplaced their focus on material needs",
          "They are too busy with work",
          "They don't have enough friends",
        ],
        correct_answer:
          "They might have misplaced their focus on material needs",
      },
      {
        question: "Where, according to the text, is purpose truly found?",
        options: [
          "In our possessions",
          "In our contribution to others' well-being",
          "In the pursuit of fame",
          "In isolation",
        ],
        correct_answer: "In our contribution to others' well-being",
      },
      {
        question: "What has been 'underestimated' in the quest for autonomy?",
        options: [
          "The role of technology",
          "The importance of communal ties",
          "The value of professional success",
          "The biological need for sleep",
        ],
        correct_answer: "The importance of communal ties",
      },
      {
        question:
          "How has the digital age complicated our 'ontological journey'?",
        options: [
          "By making it easier to communicate",
          "By creating a culture of perpetual distraction",
          "By providing too much information",
          "By making life more predictable",
        ],
        correct_answer: "By creating a culture of perpetual distraction",
      },
      {
        question:
          "What is necessary for spiritual growth that the digital age often prevents?",
        options: [
          "Fast internet",
          "Deep, quiet reflection",
          "Constant social interaction",
          "Professional training",
        ],
        correct_answer: "Deep, quiet reflection",
      },
      {
        question: "Is there a universal answer to the pursuit of purpose?",
        options: [
          "Yes, and it's found in science",
          "No, it is a deeply personal endeavor",
          "Yes, and it's found in religion",
          "No, because the question is meaningless",
        ],
        correct_answer: "No, it is a deeply personal endeavor",
      },
      {
        question:
          "What does the author suggest about the 'roadmap' to existence?",
        options: [
          "We should have found it by now",
          "The beauty of existence lies in the diversity, not a universal map",
          "Technology will eventually provide one",
          "It was written by ancient philosophers",
        ],
        correct_answer:
          "The beauty of existence lies in the diversity, not a universal map",
      },
      {
        question: "What is the final conclusion about the journey of life?",
        options: [
          "It is a path to a specific destination",
          "The journey itself is the true purpose",
          "It is overshadowed by technology",
          "It is ultimately disappointing",
        ],
        correct_answer: "The journey itself is the true purpose",
      },
    ],
  },
  {
    unit_id: 14,
    theme: "Cultural Identity & Anthropology (Cleft Sentences)",
    word_count: 584,
    title: "The Architecture of Identity: Beyond Borders",
    text_paragraphs: [
      "In an era of unprecedented globalization, the concept of cultural identity has become increasingly complex and multi-faceted. It is not just our place of birth that defines who we are, but the myriad of experiences and influences that shape our worldview. While some cling to traditional notions of national identity, others are embracing a more fluid, cosmopolitan sense of self. To understand this shift, one must explore how cultural boundaries are being redrawn in the 21st century.",
      "It is through the medium of language that we first begin to construct our cultural framework. Language is not merely a tool for communication; it is a repository of history, values, and distinct ways of perceiving the world. When a language is lost, it is not just words that disappear, but an entire way of life. It was the realization of this vulnerability that led many communities to launch revitalization programs. By preserving their native tongues, they are fighting to protect their unique cultural heritage from being erased by dominant global cultures.",
      "Furthermore, the role of tradition in maintaining identity cannot be overstated. It is the celebration of festivals, the sharing of traditional meals, and the performance of ancestral rites that anchor us to our past. These practices provide a sense of continuity in a rapidly changing world. However, it is also true that traditions must evolve to remain relevant. What was once a rigid set of rules is now often interpreted in new and creative ways. It is this adaptability that allows cultures to survive and even flourish in diverse environments.",
      "The digital revolution has also had a profound impact on cultural expression. It is on social media platforms that many young people are now exploring and negotiating their identities. This virtual space allows for the creation of global communities that transcend geographical borders. However, it is also here that the pressure to conform to globalized standards of beauty and success is most intense. We must ask ourselves whether this connectivity is truly fostering cultural diversity or simply creating a homogeneous global culture.",
      "Anthropologists have long studied how identity is performative—built through our interactions with others. It is through these daily encounters that we signal our belonging to specific groups. Whether it is the clothes we wear, the music we listen to, or the stories we tell, every choice is a part of the complex puzzle of identity. It is this constant negotiation between the individual and the collective that makes the study of human culture so fascinating. We are not just passive recipients of culture; we are active participants in its creation.",
      "In conclusion, the architecture of identity is not a static structure, but a dynamic and ever-evolving process. It is the plurality of our identities that makes us unique, and it is the recognition of this plurality that is necessary for a more inclusive society. As we move forward, we must celebrate the richness of human diversity while also acknowledging our shared humanity. It is only by doing so that we can build a world where everyone's identity is respected and valued, regardless of where they come from or what they believe.",
    ],
    vocabulary_focus: [
      "unprecedented",
      "cosmopolitan",
      "repository",
      "vulnerability",
      "revitalization",
      "continuity",
      "adaptability",
      "transcend",
      "homogeneous",
      "plurality",
    ],
    comprehension_questions: [
      {
        question:
          "What has made cultural identity more complex in the modern era?",
        options: [
          "Isolation",
          "Unprecedented globalization",
          "The lack of technology",
          "Ancient wars",
        ],
        correct_answer: "Unprecedented globalization",
      },
      {
        question: "According to the text, what defines who we are?",
        options: [
          "Only our place of birth",
          "A myriad of experiences and influences",
          "Our wealth",
          "Our physical appearance",
        ],
        correct_answer: "A myriad of experiences and influences",
      },
      {
        question: "What is described as a 'repository of history and values'?",
        options: ["Architecture", "Language", "Food", "Fashion"],
        correct_answer: "Language",
      },
      {
        question: "Why do communities launch language revitalization programs?",
        options: [
          "To attract tourists",
          "To protect their unique cultural heritage",
          "To build better schools",
          "To improve trade",
        ],
        correct_answer: "To protect their unique cultural heritage",
      },
      {
        question:
          "What provides 'anchor' and 'continuity' in a changing world?",
        options: [
          "Modern sports",
          "The celebration of traditions and ancestral rites",
          "Working in office buildings",
          "International travel",
        ],
        correct_answer: "The celebration of traditions and ancestral rites",
      },
      {
        question: "How must traditions behave to remain relevant?",
        options: [
          "They must remain completely rigid",
          "They must evolve",
          "They must be forgotten",
          "They must be kept secret",
        ],
        correct_answer: "They must evolve",
      },
      {
        question:
          "Where are many young people negotiating their identities today?",
        options: [
          "In libraries",
          "In traditional villages",
          "On social media platforms",
          "In sports clubs",
        ],
        correct_answer: "On social media platforms",
      },
      {
        question:
          "What is a major potential downside of digital connectivity mentioned?",
        options: [
          "It is too expensive",
          "It might create a homogeneous global culture",
          "It is too slow",
          "It is only for the wealthy",
        ],
        correct_answer: "It might create a homogeneous global culture",
      },
      {
        question: "What does it mean that identity is 'performative'?",
        options: [
          "It is only for actors",
          "It is built through our interactions with others",
          "It is decided for us at birth",
          "It is hidden from others",
        ],
        correct_answer: "It is built through our interactions with others",
      },
      {
        question: "Are we described as passive recipients of culture?",
        options: [
          "Yes, we just follow what we see",
          "No, we are active participants in its creation",
          "Yes, because of globalization",
          "Only until we reach adulthood",
        ],
        correct_answer: "No, we are active participants in its creation",
      },
      {
        question:
          "What is necessary for a more inclusive society according to the text?",
        options: [
          "Higher taxes",
          "A single global language",
          "The recognition of the plurality of our identities",
          "More strict borders",
        ],
        correct_answer: "The recognition of the plurality of our identities",
      },
      {
        question: "What is the final goal suggested in the conclusion?",
        options: [
          "To create a single culture",
          "To build a world where all identities are respected",
          "To stop globalization",
          "To increase national pride",
        ],
        correct_answer: "To build a world where all identities are respected",
      },
    ],
  },
  {
    unit_id: 15,
    theme: "AI & Ethics (Future in the Past)",
    word_count: 593,
    title: "Echoes of the Future: The AI Legacy",
    text_paragraphs: [
      "When the first computers were built in the mid-20th century, few could have predicted the profound impact that Artificial Intelligence (AI) would eventually have on our world. Back then, it was imagined that machines would simply handle complex mathematical calculations. No one was aware that these machines were going to evolve into sophisticated systems capable of mimicking human thought and creativity. Today, we are living in the future that those pioneers were only beginning to dream of.",
      "It was once thought that AI would remain a tool for specialized scientific research. However, it was clear that the technology was going to permeate every aspect of our daily lives. From the way we browse the internet to the diagnostic tools used by doctors, AI is now omnipresent. We might have expected this transition to take longer, but the pace of innovation has been astonishing. Consequently, we are now forced to confront the ethical implications that we were once able to ignore.",
      "The fear of mass unemployment due to automation has been a recurring theme. Years ago, experts warned that millions of jobs would be lost if robots were to take over the workforce. While this has happened in some sectors, new roles were also created. We were going to see a transformation of the labor market, but many underestimated the resilience of human ingenuity. If we had planned for these shifts more proactively, the current economic anxiety might have been significantly reduced.",
      "Furthermore, the issue of algorithmic bias has become a critical concern. At the start of the digital age, we believed that computers would be perfectly objective. We were going to achieve a level of fairness that was impossible for biased humans to reach. However, we soon learned that AI systems are only as good as the data they are trained on. If that data is biased, the resulting decisions will be as well. We should have anticipated this vulnerability earlier, before these systems were integrated into law enforcement and hiring.",
      "The development of autonomous weapons is perhaps the most frightening application of AI. International organizations were going to sign treaties to limit this technology before it reached a dangerous stage. However, the global arms race has made such agreements difficult to achieve. If we don't act soon, we might find ourselves in a world where lethal decisions are made without human intervention. We were hoping for a future defined by peace and collaboration, but the reality is becoming increasingly precarious.",
      "In conclusion, the legacy of AI is still being written, and we are the authors of the next chapter. We were going to use these technologies for the benefit of all humanity, and that goal should remain our guiding principle. As we move forward, we must prioritize ethics and transparency in everything we do. By doing so, we can ensure that the AI we build is not just intelligent, but also aligned with our most deeply held values. The future that was once distant is now here, and it is up to us to shape it wisely.",
    ],
    vocabulary_focus: [
      "pioneers",
      "omnipresent",
      "innovation",
      "transformation",
      "ingenuity",
      "algorithmic",
      "vulnerability",
      "precarious",
      "transparency",
      "aligned",
    ],
    comprehension_questions: [
      {
        question:
          "What was the initial expectation for computers in the mid-20th century?",
        options: [
          "To mimic human creativity",
          "To handle complex mathematical calculations",
          "To fly spaceships",
          "To replace all human teachers",
        ],
        correct_answer: "To handle complex mathematical calculations",
      },
      {
        question:
          "Did pioneers expect machines to evolve into sophisticated systems mimicking human thought?",
        options: [
          "Yes, they planned it from the start",
          "No, few could have predicted this impact",
          "Only the writers of science fiction did",
          "Yes, but they thought it would take 500 years",
        ],
        correct_answer: "No, few could have predicted this impact",
      },
      {
        question: "What was once thought about the scope of AI's use?",
        options: [
          "It would be used by everyone daily",
          "It would remain a tool for specialized scientific research",
          "It would replace the government",
          "It would be for games only",
        ],
        correct_answer:
          "It would remain a tool for specialized scientific research",
      },
      {
        question: "How is AI described in the 2nd paragraph?",
        options: [
          "As a niche technology",
          "As omnipresent",
          "As a temporary trend",
          "As mostly useless",
        ],
        correct_answer: "As omnipresent",
      },
      {
        question:
          "What has been the result of the 'astonishing' pace of innovation?",
        options: [
          "Life has become simpler",
          "We are forced to confront ethical implications",
          "Technology has become cheaper for everyone",
          "Scientific research has stopped",
        ],
        correct_answer: "We are forced to confront ethical implications",
      },
      {
        question: "What was the recurring fear regarding automation?",
        options: [
          "Robots becoming our friends",
          "Mass unemployment",
          "Computers getting too expensive",
          "A lack of electricity",
        ],
        correct_answer: "Mass unemployment",
      },
      {
        question:
          "What did many underestimate during the labor market transformation?",
        options: [
          "The cost of robots",
          "The resilience of human ingenuity",
          "The speed of the internet",
          "The number of people in the world",
        ],
        correct_answer: "The resilience of human ingenuity",
      },
      {
        question: "What was the initial belief about computer objectivity?",
        options: [
          "That computers would be more biased than humans",
          "That computers would be perfectly objective",
          "That computers couldn't make decisions",
          "That computers were only for math",
        ],
        correct_answer: "That computers would be perfectly objective",
      },
      {
        question: "Why do AI systems produce biased results?",
        options: [
          "Because they are broken",
          "Because they are only as good as the data they are trained on",
          "Because they want to be evil",
          "Because they are too fast",
        ],
        correct_answer:
          "Because they are only as good as the data they are trained on",
      },
      {
        question:
          "What was 'going to happen' regarding autonomous weapons treaties?",
        options: [
          "They were never considered",
          "International organizations were going to sign them earlier",
          "They were signed by all nations",
          "They were banned by scientists only",
        ],
        correct_answer:
          "International organizations were going to sign them earlier",
      },
      {
        question:
          "How is the current reality of international security described?",
        options: [
          "As stable and peaceful",
          "As increasingly precarious",
          "As fully controlled by AI",
          "As unimportant",
        ],
        correct_answer: "As increasingly precarious",
      },
      {
        question:
          "What should be the guiding principle for the next chapter of AI?",
        options: [
          "Maximum profit",
          "The benefit of all humanity",
          "Faster processing speeds",
          "Total automation",
        ],
        correct_answer: "The benefit of all humanity",
      },
    ],
  },
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
