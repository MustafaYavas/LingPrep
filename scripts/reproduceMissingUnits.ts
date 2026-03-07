import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import type { QuizUnit } from "./types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// We will construct real questions to ensure quality, not just "Seçenek A".

const unit6: QuizUnit = {
  unit_id: 6,
  unit_title: "Anılar ve Dün",
  tests: [
    {
      id: "t1",
      title: "Test 1: Was/Were Kullanımı",
      questions: [
        {
          id: "u6_t1_q1",
          type: "multiple_choice",
          difficulty: "easy",
          question_text: "I ___ very tired yesterday.",
          options: ["am", "was", "were", "is"],
          correct_answer: "was",
          explanation: "I öznesi ile geçmiş zamanda 'was' kullanılır.",
        },
        {
          id: "u6_t1_q2",
          type: "multiple_choice",
          difficulty: "easy",
          question_text: "They ___ at the cinema last night.",
          options: ["was", "are", "were", "been"],
          correct_answer: "were",
          explanation: "Çoğul öznelerde 'were' kullanılır.",
        },
        {
          id: "u6_t1_q3",
          type: "fill_in_blank",
          difficulty: "medium",
          question_text: "___ you at home? (Evde miydin?)",
          correct_answer: "Were",
          explanation: "You öznesiyle 'were' kullanılır.",
        },
        {
          id: "u6_t1_q4",
          type: "true_false",
          difficulty: "easy",
          question_text: "'She were happy' gramer olarak doğrudur.",
          correct_answer: "false",
          explanation: "She öznesi 'was' alır.",
        },
        {
          id: "u6_t1_q5",
          type: "multiple_choice",
          difficulty: "medium",
          question_text: "Where ___ you yesterday?",
          options: ["was", "did", "are", "were"],
          correct_answer: "were",
          explanation: "Where were you? geçmiş zaman durum cümlesidir.",
        },
      ],
    },
    {
      id: "t2",
      title: "Test 2: Düzenli Fiiller (Past Simple)",
      questions: [
        {
          id: "u6_t2_q1",
          type: "multiple_choice",
          difficulty: "easy",
          question_text: "I ___ tennis yesterday.",
          options: ["play", "played", "playing", "plays"],
          correct_answer: "played",
          explanation: "Geçmiş zamanda düzenli fiillere -ed takısı gelir.",
        },
        {
          id: "u6_t2_q2",
          type: "fill_in_blank",
          difficulty: "medium",
          question_text: "She ___ (watch) a movie last night.",
          correct_answer: "watched",
          explanation: "watch fiili düzenlidir, watched olur.",
        },
        {
          id: "u6_t2_q3",
          type: "multiple_choice",
          difficulty: "medium",
          question_text: "We ___ to music.",
          options: ["listened", "listen", "listens", "listening"],
          correct_answer: "listened",
          explanation: "Düzenli geçmiş zaman 'listened'.",
        },
        {
          id: "u6_t2_q4",
          type: "true_false",
          difficulty: "easy",
          question_text:
            "Geçmişte olumsuz cümle yaparken 'didn't + fiilin 1. hali' kullanılır.",
          correct_answer: "true",
          explanation: "did yardımcı fiili kullanıldıysa asıl fiil yalın olur.",
        },
        {
          id: "u6_t2_q5",
          type: "multiple_choice",
          difficulty: "easy",
          question_text: "I didn't ___ TV.",
          options: ["watched", "watches", "watch", "watching"],
          correct_answer: "watch",
          explanation: "didn't sonrasında fiil yalın haldedir.",
        },
      ],
    },
    {
      id: "t3",
      title: "Test 3: Düzensiz Fiiller",
      questions: [
        {
          id: "u6_t3_q1",
          type: "multiple_choice",
          difficulty: "medium",
          question_text: "Go fiilinin 2. hali nedir?",
          options: ["goed", "goes", "went", "gone"],
          correct_answer: "went",
          explanation: "Go düzensiz bir fiildir ve went olur.",
        },
        {
          id: "u6_t3_q2",
          type: "fill_in_blank",
          difficulty: "medium",
          question_text: "She ___ (buy) a new car yesterday.",
          correct_answer: "bought",
          explanation: "Buy fiilinin 2. hali bought.",
        },
        {
          id: "u6_t3_q3",
          type: "multiple_choice",
          difficulty: "easy",
          question_text: "He ___ to school.",
          options: ["come", "comed", "came", "coming"],
          correct_answer: "came",
          explanation: "Come fiilinin 2. hali came.",
        },
        {
          id: "u6_t3_q4",
          type: "true_false",
          difficulty: "hard",
          question_text: "'See' fiilinin 2. hali 'seed' şeklindedir.",
          correct_answer: "false",
          explanation: "See fiilinin 2. hali saw'dur.",
        },
        {
          id: "u6_t3_q5",
          type: "multiple_choice",
          difficulty: "medium",
          question_text: "They ___ dinner at 8 PM.",
          options: ["have", "had", "haved", "has"],
          correct_answer: "had",
          explanation: "Have fiilinin 2. hali had'dir.",
        },
      ],
    },
  ],
};

const unit12: QuizUnit = {
  unit_id: 12,
  unit_title: "Modern Yaşam & Teknoloji",
  tests: [
    {
      id: "t1",
      title: "Test 1: Present Simple",
      questions: [
        {
          id: "u12_t1_q1",
          type: "multiple_choice",
          difficulty: "easy",
          question_text: "He ___ up at 7 o'clock every day.",
          options: ["wake", "waking", "wakes", "waked"],
          correct_answer: "wakes",
          explanation: "Geniş zamanda 'He' öznesi ile fiil 's' takısı alır.",
        },
        {
          id: "u12_t1_q2",
          type: "fill_in_blank",
          difficulty: "medium",
          question_text: "I always ___ (drink) coffee.",
          correct_answer: "drink",
          explanation: "I öznesi ile fiil yalın kalır.",
        },
        {
          id: "u12_t1_q3",
          type: "multiple_choice",
          difficulty: "medium",
          question_text: "___ she like apples?",
          options: ["Do", "Does", "Is", "Are"],
          correct_answer: "Does",
          explanation:
            "Soru cümlesinde 'she' için 'Does' yardımcı fiili kullanılır.",
        },
        {
          id: "u12_t1_q4",
          type: "true_false",
          difficulty: "easy",
          question_text: "Geniş zaman alışkanlıkları ifade eder.",
          correct_answer: "true",
          explanation: "Evet, rutin ve alışkanlıklar geniş zamanla anlatılır.",
        },
        {
          id: "u12_t1_q5",
          type: "multiple_choice",
          difficulty: "easy",
          question_text: "They don't ___ meat.",
          options: ["eat", "eats", "eating", "ate"],
          correct_answer: "eat",
          explanation: "don't veya doesn't sonrasında fiil yalın haldedir.",
        },
      ],
    },
    {
      id: "t2",
      title: "Test 2: Present Continuous",
      questions: [
        {
          id: "u12_t2_q1",
          type: "multiple_choice",
          difficulty: "easy",
          question_text: "I ___ listening to music now.",
          options: ["am", "is", "are", "do"],
          correct_answer: "am",
          explanation: "Şimdiki zamanda am/is/are + verb-ing.",
        },
        {
          id: "u12_t2_q2",
          type: "fill_in_blank",
          difficulty: "medium",
          question_text: "He is ___ (run) in the park.",
          correct_answer: "running",
          explanation: "Şimdiki zamanda fiil -ing alır.",
        },
        {
          id: "u12_t2_q3",
          type: "multiple_choice",
          difficulty: "medium",
          question_text: "Are they ___ a game?",
          options: ["play", "plays", "playing", "played"],
          correct_answer: "playing",
          explanation: "Şimdiki zaman kuralı: are + subject + verb-ing.",
        },
        {
          id: "u12_t2_q4",
          type: "true_false",
          difficulty: "easy",
          question_text: "Şimdiki zaman her zaman geleceği ifade eder.",
          correct_answer: "false",
          explanation:
            "Şu an yapılan eylemleri ifade eder (bazen planlanmış gelecek de olabilir).",
        },
        {
          id: "u12_t2_q5",
          type: "multiple_choice",
          difficulty: "easy",
          question_text: "She ___ studying right now.",
          options: ["isn't", "aren't", "don't", "doesn't"],
          correct_answer: "isn't",
          explanation: "She öznesi is/isn't alır.",
        },
      ],
    },
    {
      id: "t3",
      title: "Test 3: Simple vs. Continuous",
      questions: [
        {
          id: "u12_t3_q1",
          type: "multiple_choice",
          difficulty: "hard",
          question_text: "I ___ he is a good person.",
          options: ["am thinking", "think", "thinks", "thinking"],
          correct_answer: "think",
          explanation: "State (durum) fiilleri normalde -ing almaz.",
        },
        {
          id: "u12_t3_q2",
          type: "fill_in_blank",
          difficulty: "medium",
          question_text:
            "She normally wakes up early, but today she is ___ (sleep) late.",
          correct_answer: "sleeping",
          explanation: "Geçici durumlar şimdiki zamanla anlatılır.",
        },
        {
          id: "u12_t3_q3",
          type: "multiple_choice",
          difficulty: "medium",
          question_text: "Water ___ at 100 degrees Celsius.",
          options: ["boil", "is boiling", "boils", "boiled"],
          correct_answer: "boils",
          explanation:
            "Bilimsel gerçekler geniş zaman (Simple Present) ile anlatılır.",
        },
        {
          id: "u12_t3_q4",
          type: "true_false",
          difficulty: "hard",
          question_text:
            "'Know' fiili present continuous ile 'I am knowing' şeklinde kullanılabilir.",
          correct_answer: "false",
          explanation: "Know fiili bir state verb'dür, -ing almaz.",
        },
        {
          id: "u12_t3_q5",
          type: "multiple_choice",
          difficulty: "medium",
          question_text: "Look! The bus ___ .",
          options: ["is coming", "comes", "come", "coming"],
          correct_answer: "is coming",
          explanation:
            "O an gerçekleşen olaylar, Look! dinleme/görme sözcükleriyle şimdiki zamandır.",
        },
      ],
    },
  ],
};

const unit18: QuizUnit = {
  unit_id: 18,
  unit_title: "Kişisel Gelişim",
  tests: [
    {
      id: "t1",
      title: "Test 1: Gerunds",
      questions: [
        {
          id: "u18_t1_q1",
          type: "multiple_choice",
          difficulty: "medium",
          question_text: "I enjoy ___ books.",
          options: ["read", "to read", "reading", "reads"],
          correct_answer: "reading",
          explanation: "Enjoy fiilinden sonra gelen fiil V-ing (gerund) alır.",
        },
        {
          id: "u18_t1_q2",
          type: "fill_in_blank",
          difficulty: "medium",
          question_text: "She avoids ___ (talk) to him.",
          correct_answer: "talking",
          explanation: "Avoid daima gerund ile kullanılır.",
        },
        {
          id: "u18_t1_q3",
          type: "multiple_choice",
          difficulty: "hard",
          question_text: "___ English is fun.",
          options: ["Learn", "To learning", "Learning", "Learnt"],
          correct_answer: "Learning",
          explanation:
            "Cümle öznesi olarak kullanıldığında fiil isim fiil (gerund) olur.",
        },
        {
          id: "u18_t1_q4",
          type: "true_false",
          difficulty: "medium",
          question_text: "'Mind' fiilinden sonra infinitive (to + verb) gelir.",
          correct_answer: "false",
          explanation: "Örn: Do you mind closing the door? Gerund gelir.",
        },
        {
          id: "u18_t1_q5",
          type: "multiple_choice",
          difficulty: "medium",
          question_text: "They finished ___ their homework.",
          options: ["do", "to do", "doing", "did"],
          correct_answer: "doing",
          explanation: "Finish fiili kendisinden sonra V-ing gerektirir.",
        },
      ],
    },
    {
      id: "t2",
      title: "Test 2: Infinitives",
      questions: [
        {
          id: "u18_t2_q1",
          type: "multiple_choice",
          difficulty: "medium",
          question_text: "I want ___ a new language.",
          options: ["learn", "learning", "to learn", "learns"],
          correct_answer: "to learn",
          explanation: "Want fiilinden sonra to + V1 (infinitive) gelir.",
        },
        {
          id: "u18_t2_q2",
          type: "fill_in_blank",
          difficulty: "medium",
          question_text: "She decided ___ (go) to Paris.",
          correct_answer: "to go",
          explanation: "Decide infinitive ile kullanılır.",
        },
        {
          id: "u18_t2_q3",
          type: "multiple_choice",
          difficulty: "hard",
          question_text: "We hope ___ you soon.",
          options: ["seeing", "see", "to see", "saw"],
          correct_answer: "to see",
          explanation: "Hope her zaman to verb ile kullanılır.",
        },
        {
          id: "u18_t2_q4",
          type: "true_false",
          difficulty: "easy",
          question_text:
            "'Need' fiilinden sonra genellikle infinitive kullanılır.",
          correct_answer: "true",
          explanation: "Örn: I need to sleep.",
        },
        {
          id: "u18_t2_q5",
          type: "multiple_choice",
          difficulty: "medium",
          question_text: "He promised ___ me.",
          options: ["helping", "to help", "help", "helped"],
          correct_answer: "to help",
          explanation: "Promise de to + infinitive gerektirir.",
        },
      ],
    },
    {
      id: "t3",
      title: "Test 3: Anlam Değişimi (Stop, Remember, Forget)",
      questions: [
        {
          id: "u18_t3_q1",
          type: "multiple_choice",
          difficulty: "hard",
          question_text: "I stopped ___ coffee.",
          options: ["to drink", "drinking", "drink", "drank"],
          correct_answer: "drinking",
          explanation:
            "Stop + V-ing, o eylemi tamamen bırakmak anlamına gelir.",
        },
        {
          id: "u18_t3_q2",
          type: "fill_in_blank",
          difficulty: "hard",
          question_text: "I remembered ___ (lock) the door before leaving.",
          correct_answer: "to lock",
          explanation:
            "Yapması gereken bir eylemi hatırlamak: remember to yapısıdır.",
        },
        {
          id: "u18_t3_q3",
          type: "multiple_choice",
          difficulty: "hard",
          question_text: "I will never forget ___ you for the first time.",
          options: ["to meet", "meeting", "meet", "met"],
          correct_answer: "meeting",
          explanation:
            "Forget + V-ing geçmişte yaşanan ve hatırlanan bir olayı unutmamaktır.",
        },
        {
          id: "u18_t3_q4",
          type: "true_false",
          difficulty: "hard",
          question_text: "'Stop to talk' konuşmayı bırakmak anlamına gelir.",
          correct_answer: "false",
          explanation: "Konuşmak için durmak anlamına gelir.",
        },
        {
          id: "u18_t3_q5",
          type: "multiple_choice",
          difficulty: "hard",
          question_text: "She tried ___ the heavy box, but it was too heavy.",
          options: ["to lift", "lifting", "lift", "lifted"],
          correct_answer: "to lift",
          explanation: "Try to V1: çaba göstermek, zorlamak demektir.",
        },
      ],
    },
  ],
};

const unit24: QuizUnit = {
  unit_id: 24,
  unit_title: "Felsefe ve Varoluş",
  tests: [
    {
      id: "t1",
      title: "Test 1: Deduction (Çıkarım Modalları)",
      questions: [
        {
          id: "u24_t1_q1",
          type: "multiple_choice",
          difficulty: "hard",
          question_text: "He has a big luxury car. He ___ be rich.",
          options: ["must", "can't", "should", "might"],
          correct_answer: "must",
          explanation: "Güçlü bir olumlu çıkarım yaparken must kullanılır.",
        },
        {
          id: "u24_t1_q2",
          type: "fill_in_blank",
          difficulty: "hard",
          question_text: "That ___ (can't/must) be true, I know he is lying.",
          correct_answer: "can't",
          explanation: "Olumsuz güçlü çıkarımlarda can't kullanılır.",
        },
        {
          id: "u24_t1_q3",
          type: "multiple_choice",
          difficulty: "medium",
          question_text:
            "Where is John? He ___ be at the office, but I'm not sure.",
          options: ["must", "can't", "might", "will"],
          correct_answer: "might",
          explanation:
            "Emin olunmayan yüzde 50 ihtimalli durumlarda might/may/could kullanılır.",
        },
        {
          id: "u24_t1_q4",
          type: "true_false",
          difficulty: "hard",
          question_text: "Olumsuz çıkarım 'mustn't' ile yapılır.",
          correct_answer: "false",
          explanation:
            "Hayır, olumsuz çıkarım can't ile yapılır. Mustn't yasaklama bildirir.",
        },
        {
          id: "u24_t1_q5",
          type: "multiple_choice",
          difficulty: "hard",
          question_text: "The lights are off. They ___ be sleeping.",
          options: ["must", "can't", "should", "ought"],
          correct_answer: "must",
          explanation:
            "Işıklar kapalı olması kesinliğe yakın uyudukları çıkarımını verir.",
        },
      ],
    },
    {
      id: "t2",
      title: "Test 2: Past Modals",
      questions: [
        {
          id: "u24_t2_q1",
          type: "multiple_choice",
          difficulty: "hard",
          question_text: "You ___ have studied harder. (You failed the exam)",
          options: ["must", "should", "can't", "might"],
          correct_answer: "should",
          explanation:
            "Geçmişteki bir hatadan dolayı pişmanlık veya eleştiri bildirmek için 'should have V3'.",
        },
        {
          id: "u24_t2_q2",
          type: "fill_in_blank",
          difficulty: "hard",
          question_text:
            "He ___ have forgotten the meeting. (He never forgets!)",
          correct_answer: "can't",
          explanation:
            "Geçmişle ilgili kuvvetli olumsuz çıkarım: can't have V3.",
        },
        {
          id: "u24_t2_q3",
          type: "multiple_choice",
          difficulty: "hard",
          question_text:
            "She got a 100 on the test. She ___ have studied a lot.",
          options: ["should", "can't", "must", "could"],
          correct_answer: "must",
          explanation: "Geçmişle ilgili kuvvetli olumlu çıkarım: must have V3.",
        },
        {
          id: "u24_t2_q4",
          type: "true_false",
          difficulty: "hard",
          question_text:
            "'Could have' cümlesi geçmişte yapılması mümkün olup da yapılmayan eylemleri ifade eder.",
          correct_answer: "true",
          explanation: "Evet, fırsat vardı ama yapılmadı anlamındadır.",
        },
        {
          id: "u24_t2_q5",
          type: "multiple_choice",
          difficulty: "hard",
          question_text:
            "I ___ have left my keys at work, they are not in my pocket.",
          options: ["must", "should", "would", "shall"],
          correct_answer: "must",
          explanation: "Geçmiş olumlu çıkarım.",
        },
      ],
    },
    {
      id: "t3",
      title: "Test 3: Habits in the Past",
      questions: [
        {
          id: "u24_t3_q1",
          type: "multiple_choice",
          difficulty: "medium",
          question_text: "I ___ smoke, but I quit last year.",
          options: ["used to", "would", "am used to", "use to"],
          correct_answer: "used to",
          explanation: "Bırakılmış eski alışkanlık ve durumlar için 'used to'.",
        },
        {
          id: "u24_t3_q2",
          type: "fill_in_blank",
          difficulty: "hard",
          question_text:
            "When we were kids, we ___ play in the park every day.",
          correct_answer: "would",
          explanation:
            "Geçmişte tekrarlanan eylemleri anlatırken 'would' da kullanılır.",
        },
        {
          id: "u24_t3_q3",
          type: "multiple_choice",
          difficulty: "hard",
          question_text:
            "Which one canNOT be used for purely stative verbs in the past?",
          options: ["used to", "would", "past simple", "all of them can"],
          correct_answer: "would",
          explanation:
            "Would durum fiilleriyle (be, have, know gibi) kullanılmaz, sadece eylem fiilleri.",
        },
        {
          id: "u24_t3_q4",
          type: "true_false",
          difficulty: "medium",
          question_text:
            "'I am used to living alone' cümlesi geçmiş zamanı anlatır.",
          correct_answer: "false",
          explanation:
            "Be used to + V-ing 'X'e alışkın olmak' demektir, şu anki bir alışkanlıktır.",
        },
        {
          id: "u24_t3_q5",
          type: "multiple_choice",
          difficulty: "hard",
          question_text: "I ___ to live in London.",
          options: ["used", "would", "use", "was used"],
          correct_answer: "used",
          explanation:
            "Live durum/state bildirdiği için used to alır, would alamaz.",
        },
      ],
    },
  ],
};

const unitsConfig = [unit6, unit12, unit18, unit24];

unitsConfig.forEach((unit) => {
  const fileContent = JSON.stringify(unit, null, 2);
  fs.writeFileSync(
    path.join(
      __dirname,
      `../src/utils/mockData/quizDataUnit${unit.unit_id}.json`,
    ),
    fileContent,
    "utf-8",
  );
  console.log(`Unit ${unit.unit_id} generated properly!`);
});
