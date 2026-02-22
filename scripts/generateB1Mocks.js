import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unitsData = [
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
          {
            id: "u12_t1_q2",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "Aşağıdakilerden hangisi geçici bir durumu belirtir?",
            options: [
              "I live in London.",
              "I am staying at a hotel this week.",
              "Water boils at 100 degrees.",
              "I drink tea every morning.",
            ],
            correct_answer: "I am staying at a hotel this week.",
            explanation:
              "'This week' ifadesi durumun geçici olduğunu gösterir.",
          },
          {
            id: "u12_t1_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "The population of the world ______ (increase) very fast nowadays.",
            correct_answer: "is increasing",
            explanation:
              "Değişmekte olan trendler ve süreçler için Present Continuous kullanılır.",
          },
          {
            id: "u12_t1_q4",
            type: "contextual_multiple_choice",
            difficulty: "hard",
            context:
              "Why ______ (you / look) at me like that? Do I have something on my face?",
            question_text: "Choose the correct form.",
            options: [
              "do you look",
              "are you looking",
              "have you looked",
              "you look",
            ],
            correct_answer: "are you looking",
            explanation:
              "Konuşma anındaki bir eylem sorulduğu için Continuous yapı gerekir.",
          },
          {
            id: "u12_t1_q5",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Hangi fiil normalde 'Continuous' (ing) takısı ALMAZ (State Verb)?",
            options: ["Run", "Think (opinion)", "Play", "Watch"],
            correct_answer: "Think (opinion)",
            explanation:
              "Fikir beyan eden 'think' (inanmak/düşünmek) durum bildirir ve -ing almaz.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Teknoloji ve Trendler",
        questions: [
          {
            id: "u12_t2_q1",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context:
              "More and more people ______ (use) artificial intelligence in their daily lives these days.",
            question_text: "Select the most appropriate form.",
            options: ["uses", "use", "are using", "to use"],
            correct_answer: "are using",
            explanation:
              "Güncel trendlerden bahsederken Continuous yapı tercih edilir.",
          },
          {
            id: "u12_t2_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "I ______ (not / understand) why this app isn't working.",
            correct_answer: "don't understand",
            explanation:
              "Anlamak (understand) bir durum fiilidir, olumsuz yapısı Present Simple ile kurulur.",
          },
          {
            id: "u12_t2_q3",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "'Technology ______ (change) the way we communicate.' - Genel bir doğru olduğu için hangi zaman uygundur?",
            options: ["is changing", "changes", "changed", "change"],
            correct_answer: "changes",
            explanation:
              "Genel doğrular ve kalıcı durumlar için Present Simple kullanılır.",
          },
          {
            id: "u12_t2_q4",
            type: "contextual_multiple_choice",
            difficulty: "hard",
            context:
              "Listen! My computer ______ (make) a strange noise. I think it's going to break.",
            question_text: "Choose the correct option.",
            options: ["makes", "is making", "has made", "making"],
            correct_answer: "is making",
            explanation:
              "'Listen!' komutu eylemin şu an gerçekleştiğini işaret eder.",
          },
          {
            id: "u12_t2_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "A: What ______ you ______ (do)? B: I'm an engineer.",
            correct_answer: "do / do",
            explanation:
              "Meslek sorulurken hayat boyu süren bir durum olduğu için Simple Present 'What do you do?' kalıbı kullanılır.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Karma Karmaşıklık",
        questions: [
          {
            id: "u12_t3_q1",
            type: "contextual_multiple_choice",
            difficulty: "hard",
            context:
              "A: Why are you so tired? B: Because I ______ (not / get) enough sleep these days.",
            question_text: "Complete the sentence.",
            options: [
              "don't get",
              "am not getting",
              "not getting",
              "didn't get",
            ],
            correct_answer: "am not getting",
            explanation:
              "Son zamanlarda (these days) süregelen geçici bir şikayet/durum anlatılmaktadır.",
          },
          {
            id: "u12_t3_q2",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Hangisi 'Sürekli yaptığım can sıkıcı bir alışkanlığı' ifade eder?",
            options: [
              "I always lose my keys.",
              "I am always losing my keys!",
              "I lost my keys.",
              "I will lose my keys.",
            ],
            correct_answer: "I am always losing my keys!",
            explanation:
              "Present Continuous + always yapısı şikayet bildirilen alışkanlıklar için kullanılır.",
          },
          {
            id: "u12_t3_q3",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text: "This coffee ______ (taste) delicious. Who made it?",
            correct_answer: "tastes",
            explanation:
              "Duyu fiilleri (taste, smell, see) durum bildirirken -ing almaz.",
          },
          {
            id: "u12_t3_q4",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context:
              "Technology companies ______ (invest) billions in green energy every year.",
            question_text: "Pick the right tense.",
            options: ["invest", "are investing", "investing", "is investing"],
            correct_answer: "invest",
            explanation:
              "'Every year' (her yıl) sıklık zarfı rutin bildirdiği için Simple Present kullanılır.",
          },
          {
            id: "u12_t3_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "Be quiet! The baby ______ (sleep).",
            correct_answer: "is sleeping",
            explanation:
              "O andaki bir durumu korumak için Continuous yapı kullanılır.",
          },
        ],
      },
    ],
  },
  {
    id: 13,
    title: "Seyahat ve Macera",
    desc: "Past Continuous & Past Simple Karşılaştırması",
    tests: [
      {
        id: "t1",
        title: "Test 1: Hikaye Başlangıçları",
        questions: [
          {
            id: "u13_t1_q1",
            type: "narrative_blank",
            difficulty: "medium",
            question_text:
              "While I ______ (walk) along the beach, I ______ (find) a beautiful shell.",
            options: [
              "was walking / found",
              "walked / was finding",
              "was walking / was finding",
              "walked / found",
            ],
            correct_answer: "was walking / found",
            explanation:
              "Uzun süren arka plan eylemi (walking) kısa bir eylemle (found) bölünmüştür.",
          },
          {
            id: "u12_t1_q2",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "Past Continuous yapısının formülü nedir?",
            options: [
              "is/are + Ving",
              "was/were + Ving",
              "had + V3",
              "did + V1",
            ],
            correct_answer: "was/were + Ving",
            explanation:
              "Geçmişte devam eden eylemler was/were ve fiile eklenen -ing ile kurulur.",
          },
          {
            id: "u13_t1_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "The sun ______ (shine) when we left the hotel this morning.",
            correct_answer: "was shining",
            explanation:
              "Olayın başlangıcındaki hava durumu gibi atmosferik detaylar Past Continuous ile verilir.",
          },
          {
            id: "u13_t1_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text: "'When' ve 'While' arasındaki fark nedir?",
            options: [
              "When'den sonra genellikle kısa eylem (V2), While'dan sonra uzun eylem (Ving) gelir.",
              "Tam tersidir.",
              "İkisi de aynıdır.",
              "While sadece gelecek zamanda kullanılır.",
            ],
            correct_answer:
              "When'den sonra genellikle kısa eylem (V2), While'dan sonra uzun eylem (Ving) gelir.",
            explanation:
              "While 'iken' anlamıyla süreci, When '-dığında' anlamıyla anı niteler.",
          },
          {
            id: "u13_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "What ______ you ______ (do) at 10 PM last night?",
            correct_answer: "were / doing",
            explanation:
              "Belirli bir geçmiş zaman noktasında devam eden eylemi sormak için kullanılır.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Kesintiye Uğrayan Eylemler",
        questions: [
          {
            id: "u13_t2_q1",
            type: "narrative_blank",
            difficulty: "hard",
            question_text:
              "The phone ______ (ring) while I ______ (have) a shower.",
            options: [
              "was ringing / had",
              "rang / was having",
              "rang / had",
              "was ringing / was having",
            ],
            correct_answer: "rang / was having",
            explanation: "Duş alma süreci telefonun çalmasıyla kesilmiştir.",
          },
          {
            id: "u13_t2_q2",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Aşağıdakilerden hangisi bir 'kesinti' (interruption) cümlesidir?",
            options: [
              "I was reading while he was cooking.",
              "I finished my work and went out.",
              "I was reading when the lights went out.",
              "I will read a book tonight.",
            ],
            correct_answer: "I was reading when the lights went out.",
            explanation: "Işığın sönmesi okuma eylemini kesmiştir.",
          },
          {
            id: "u13_t2_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "I ______ (not / look) where I was going and I fell over.",
            correct_answer: "wasn't looking",
            explanation:
              "Düşme anındaki süregelen 'bakmama' durumunu ifade eder.",
          },
          {
            id: "u13_t2_q4",
            type: "narrative_blank",
            difficulty: "medium",
            question_text:
              "We ______ (see) a bear while we ______ (hike) in the mountains.",
            options: [
              "saw / were hiking",
              "were seeing / hiked",
              "saw / hiked",
              "was seeing / hiked",
            ],
            correct_answer: "saw / were hiking",
            explanation: "Görmek (see) anlık, yürüyüş yapmak (hike) süreçtir.",
          },
          {
            id: "u13_t2_q5",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "What ______ the pilot doing when the engine failure happened?",
            correct_answer: "was",
            explanation: "Pilot (tekil) için was kullanılır.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Paralel Eylemler",
        questions: [
          {
            id: "u13_t3_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Hangi cümle iki eylemin aynı anda (paralel) yapıldığını gösterir?",
            options: [
              "I was watching TV when he arrived.",
              "I was watching TV while she was reading.",
              "I watched TV and then she read.",
              "I will watch TV while she reads.",
            ],
            correct_answer: "I was watching TV while she was reading.",
            explanation:
              "İki tarafın da Past Continuous olması eylemlerin paralel olduğunu sezdirir.",
          },
          {
            id: "u13_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text: "I broke my leg while I ______ (ski).",
            correct_answer: "was skiing",
            explanation:
              "Kayak yapma (ski) eylemi sırasında olan kazayı anlatır.",
          },
          {
            id: "u13_t3_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "'While' cümle başında kullanılırsa ortada hangi işaret olmalıdır?",
            options: ["Noktalı virgül", "Virgül", "İki nokta", "Hiçbir şey"],
            correct_answer: "Virgül",
            explanation:
              "Zaman bağlaçları (While, When, If) cümle başındaysa iki cümlecik virgülle ayrılır.",
          },
          {
            id: "u13_t3_q4",
            type: "narrative_blank",
            difficulty: "hard",
            question_text:
              "It ______ (begin) to rain while they ______ (play) football.",
            options: [
              "began / were playing",
              "was beginning / played",
              "begins / plays",
              "began / played",
            ],
            correct_answer: "began / were playing",
            explanation: "Başlamak (begin) anlık bir eylemdir.",
          },
          {
            id: "u13_t3_q5",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "They ______ (wait) for the train when they heard the announcement.",
            correct_answer: "were waiting",
            explanation: "Duyuru anında beklemekte olduklarını anlatır.",
          },
        ],
      },
    ],
  },
  {
    id: 14,
    title: "Hayaller ve İhtimaller",
    desc: "First Conditional (If + Will)",
    tests: [
      {
        id: "t1",
        title: "Test 1: Sebep-Sonuç (Gelecek)",
        questions: [
          {
            id: "u14_t1_q1",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context:
              "If the weather ______ (be) good tomorrow, we ______ (go) for a picnic.",
            options: [
              "is / will go",
              "will be / go",
              "is / go",
              "was / would go",
            ],
            correct_answer: "is / will go",
            explanation:
              "First Conditional: If + Present Simple, Future (Will).",
          },
          {
            id: "u14_t1_q2",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "Aşağıdakilerden hangisi bir 'koşul' (If clause) cümlesidir?",
            options: [
              "I will go to school.",
              "If it rains, I'll stay home.",
              "I went yesterday.",
              "Do you like apples?",
            ],
            correct_answer: "If it rains, I'll stay home.",
            explanation: "'If' (eğer) ile kurulan şartlı bir cümledir.",
          },
          {
            id: "u14_t1_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "You will fail the exam if you ______ (not / study) hard.",
            correct_answer: "don't study",
            explanation:
              "Koşul kısmında (if tarafı) gelecek zaman (will) kullanılmaz, geniş zaman kullanılır.",
          },
          {
            id: "u14_t1_q4",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context:
              "If I ______ (have) enough money, I ______ (buy) that laptop next month.",
            options: [
              "have / will buy",
              "will have / buy",
              "had / buy",
              "have / buy",
            ],
            correct_answer: "have / will buy",
            explanation: "Param olursa (ihtimal) alacağım (sonuç).",
          },
          {
            id: "u14_t1_q5",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "If she ______ (come) late again, the boss will be very angry.",
            correct_answer: "comes",
            explanation:
              "She üçüncü tekil şahıs olduğu için fiil -s takısı alır.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Uyarılar ve Tahminler",
        questions: [
          {
            id: "u14_t2_q1",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context:
              "What ______ (you / do) if you ______ (not / find) a job soon?",
            options: [
              "will you do / don't find",
              "do you do / won't find",
              "are you doing / find",
              "will you do / didn't find",
            ],
            correct_answer: "will you do / don't find",
            explanation:
              "Soru cümlesinde sonuç kısmı (will you do) başa gelir.",
          },
          {
            id: "u14_t2_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "We ______ (be) late if we don't hurry up.",
            correct_answer: "will be",
            explanation: "Hızlı olmazsak (koşul) geç kalacağız (sonuç).",
          },
          {
            id: "u14_t2_q3",
            type: "multiple_choice",
            difficulty: "hard",
            question_text: "'Unless' kelimesi ne anlama gelir?",
            options: [
              "Eğer olursa",
              "Sadece o zaman",
              "Eğer gerçekleşmezse (If not)",
              "Hemen sonra",
            ],
            correct_answer: "Eğer gerçekleşmezse (If not)",
            explanation:
              "Unless = If ... not. Örn: Unless it rains = If it doesn't rain.",
          },
          {
            id: "u14_t2_q4",
            type: "contextual_multiple_choice",
            difficulty: "hard",
            context: "Unless you ______ (hurry), you ______ (miss) the bus.",
            options: [
              "hurry / will miss",
              "don't hurry / will miss",
              "hurry / miss",
              "will hurry / miss",
            ],
            correct_answer: "hurry / will miss",
            explanation:
              "Unless zaten olumsuzluk içerir (Hızlanmazsan), sonuç kısmı 'will miss' olur.",
          },
          {
            id: "u14_t2_q5",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "If you touch that fire, you ______ get burned.",
            correct_answer: "will",
            explanation:
              "Kesin olmasa da yüksek ihtimalli sonuç 'will' ile verilir.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Karışık Olasılıklar",
        questions: [
          {
            id: "u14_t3_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Hangi cümle dil bilgisi açısından HATALIDIR?",
            options: [
              "If it will rain, I'll stay.",
              "If it rains, I'll stay.",
              "I'll stay if it rains.",
              "I'll stay unless it's sunny.",
            ],
            correct_answer: "If it will rain, I'll stay.",
            explanation: "Koşul tarafında (if) asla 'will' kullanılmaz.",
          },
          {
            id: "u14_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "If I ______ (see) him, I ______ (give) him your message.",
            correct_answer: "see / will give",
            explanation: "Görürsem mesajı ileteceğim.",
          },
          {
            id: "u14_t3_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Cümleyi tamamlayın: 'If you eat too much candy, ...'",
            options: [
              "your teeth will hurt.",
              "you are happy.",
              "you were sick.",
              "the sun rises.",
            ],
            correct_answer: "your teeth will hurt.",
            explanation:
              "Mantıklı ve dil bilgisi açısından uygun gelecek sonucudur.",
          },
          {
            id: "u14_t3_q4",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context:
              "If we ______ (not / leave) now, we ______ (be) late for the wedding.",
            options: [
              "don't leave / will be",
              "won't leave / are",
              "didn't leave / would be",
              "not leave / will be",
            ],
            correct_answer: "don't leave / will be",
            explanation: "Şimdi çıkmazsak geç kalırız.",
          },
          {
            id: "u14_t3_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "I ______ (call) you if I have any news.",
            correct_answer: "will call",
            explanation: "Haberim olursa arayacağım.",
          },
        ],
      },
    ],
  },
  {
    id: 15,
    title: "Sosyal Sorunlar & Çevre",
    desc: "Passive Voice (Edilgen Yapı)",
    tests: [
      {
        id: "t1",
        title: "Test 1: Haber Dili (Present & Past Passive)",
        questions: [
          {
            id: "u15_t1_q1",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context:
              "Wait! This door ______ (lock) every night at 10 PM by the security guard.",
            options: ["is locked", "locks", "was locked", "locking"],
            correct_answer: "is locked",
            explanation:
              "Rutin bir eylem ve kapı kendi kendini kilitleyemeyeceği için Present Passive (is + V3) kullanılır.",
          },
          {
            id: "u15_t1_q2",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "Edilgen (Passive) yapının temel yardımcı fiili nedir?",
            options: ["Do / Does", "Have / Has", "Am / Is / Are (Be)", "Did"],
            correct_answer: "Am / Is / Are (Be)",
            explanation: "Passive yapı 'be + V3' (fiilin 3. hali) ile kurulur.",
          },
          {
            id: "u15_t1_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "The Pyramids ______ (build) thousands of years ago.",
            correct_answer: "were built",
            explanation:
              "Geçmişte yapılmış (ago) ve çoğul (Pyramids) olduğu için 'were built' kullanılır.",
          },
          {
            id: "u15_t1_q4",
            type: "contextual_multiple_choice",
            difficulty: "hard",
            context:
              "Breaking News: A new species of bird ______ (discover) in the Amazon last month.",
            options: [
              "is discovered",
              "was discovered",
              "discovered",
              "has discovered",
            ],
            correct_answer: "was discovered",
            explanation:
              "Belirli bir geçmiş zaman (last month) olduğu için Past Simple Passive kullanılır.",
          },
          {
            id: "u15_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "This book ______ (write) by Charles Dickens.",
            correct_answer: "was written",
            explanation:
              "Yazar tarafından yazılmış (geçmiş olay) olduğu için 'was written' uygundur.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Çevre ve Kirlilik",
        questions: [
          {
            id: "u15_t2_q1",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context:
              "Millions of plastic bottles ______ (throw away) every day, which harms the ocean.",
            options: [
              "is thrown away",
              "are thrown away",
              "throw away",
              "are throwing away",
            ],
            correct_answer: "are thrown away",
            explanation: "Çoğul özne ve her gün tekrarlanan edilgen durum.",
          },
          {
            id: "u15_t2_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text: "Paper ______ (recycle) to save trees.",
            correct_answer: "is recycled",
            explanation: "Kağıt geri dönüştürülür (genel bilgi).",
          },
          {
            id: "u15_t2_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "'The window was broken.' cümlesinde eylemi yapan kişi belli midir?",
            options: [
              "Evet",
              "Hayır",
              "Sadece 'by' varsa bellidir.",
              "Geçmişte bellidir.",
            ],
            correct_answer: "Hayır",
            explanation:
              "Edilgen yapılarda odak eylemdedir, yapan kişi genellikle söylenmez.",
          },
          {
            id: "u15_t2_q4",
            type: "contextual_multiple_choice",
            difficulty: "hard",
            context:
              "In many schools, students ______ (require) to wear a uniform.",
            options: [
              "are required",
              "is required",
              "require",
              "were required",
            ],
            correct_answer: "are required",
            explanation: "Öğrencilerden istenir (zorunluluk).",
          },
          {
            id: "u15_t2_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "The bridge ______ (damage) by the storm last night.",
            correct_answer: "was damaged",
            explanation: "Fırtına tarafından (by) zarar verildi.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Nesne Odaklı Anlatım",
        questions: [
          {
            id: "u15_t3_q1",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Hangisi 'The chef cooked the fish' cümlesinin doğru edilgen halidir?",
            options: [
              "The fish is cooked.",
              "The fish was cooked by the chef.",
              "The chef was cooked.",
              "The fish cooked the chef.",
            ],
            correct_answer: "The fish was cooked by the chef.",
            explanation: "Nesne (fish) başa gelir, 'be + V3' yapı eklenir.",
          },
          {
            id: "u15_t3_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "English ______ (speak) all over the world.",
            correct_answer: "is spoken",
            explanation: "İngilizce konuşulur (genel gerçeklik).",
          },
          {
            id: "u15_t3_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "'Make' fiilinin passive yapıda kullanılan 3. hali nedir?",
            options: ["Maked", "Make", "Made", "Making"],
            correct_answer: "Made",
            explanation: "Make düzensizdir (make/made/made).",
          },
          {
            id: "u15_t3_q4",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context: "Where ______ these cars ______ (manufacture)?",
            options: [
              "are / manufactured",
              "do / manufacture",
              "is / manufactured",
              "were / manufacture",
            ],
            correct_answer: "are / manufactured",
            explanation:
              "Bu arabalar nerede üretiliyor? (Genel üretim yeri sorusu).",
          },
          {
            id: "u15_t3_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "My bike ______ (steal) yesterday!",
            correct_answer: "was stolen",
            explanation: "Dün çalındı.",
          },
        ],
      },
    ],
  },
  {
    id: 16,
    title: "Film, Müzik ve Sanat",
    desc: "Relative Clauses (Who, Which, That)",
    tests: [
      {
        id: "t1",
        title: "Test 1: İnsanlar ve Nesneler",
        questions: [
          {
            id: "u16_t1_q1",
            type: "sentence_joining",
            difficulty: "medium",
            context: "I met a woman. She can speak seven languages.",
            question_text: "Join these sentences using 'who'.",
            options: [
              "I met a woman who can speak seven languages.",
              "I met a woman she who can speak seven languages.",
              "I met who can speak seven languages woman.",
              "A woman who I met seven languages.",
            ],
            correct_answer: "I met a woman who can speak seven languages.",
            explanation:
              "İnsanları nitelemek için 'who' kullanılır ve ikinci cümledeki zamir (she) atılır.",
          },
          {
            id: "u16_t1_q2",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "Cansız nesneleri ve hayvanları nitelemek için hangisi kullanılır?",
            options: ["Who", "Whom", "Which", "Where"],
            correct_answer: "Which",
            explanation: "Nesneler için 'which' (veya that) kullanılır.",
          },
          {
            id: "u16_t1_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "The book ______ is on the table is mine.",
            correct_answer: "which",
            explanation: "Kitap bir nesne olduğu için which/that uygundur.",
          },
          {
            id: "u16_t1_q4",
            type: "sentence_joining",
            difficulty: "hard",
            context: "The movie won three Oscars. We watched it last night.",
            question_text: "Combine these sentences using 'that'.",
            options: [
              "The movie that we watched it last night won three Oscars.",
              "The movie that we watched last night won three Oscars.",
              "The movie won three Oscars that we watched it.",
              "We watched the movie that won three Oscars it.",
            ],
            correct_answer:
              "The movie that we watched last night won three Oscars.",
            explanation: "İkinci cümledeki 'it' (movie) düşmelidir.",
          },
          {
            id: "u16_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "Do you know the boy ______ lives next door?",
            correct_answer: "who",
            explanation: "Boy (çocuk/insan) için 'who' kullanılır.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Yerler ve İyelikler",
        questions: [
          {
            id: "u16_t2_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Yer bildiren (place) isimleri nitelemek için hangisi kullanılır?",
            options: ["Who", "Which", "Where", "When"],
            correct_answer: "Where",
            explanation: "Mekanlar için 'where' kullanılır.",
          },
          {
            id: "u16_t2_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text: "This is the restaurant ______ we had dinner.",
            correct_answer: "where",
            explanation: "Yemek yediğimiz restoran (mekan).",
          },
          {
            id: "u16_t2_q3",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Aitlik (possession) bildiren isimler için hangisi kullanılır?",
            options: ["Whose", "Who's", "Which", "That"],
            correct_answer: "Whose",
            explanation: "'Whose' tamlamalarda kimin/neyin anlamı verir.",
          },
          {
            id: "u16_t2_q4",
            type: "sentence_joining",
            difficulty: "hard",
            context: "I know a man. His daughter is a famous singer.",
            question_text: "Join these using 'whose'.",
            options: [
              "I know a man who daughter is a singer.",
              "I know a man whose daughter is a famous singer.",
              "I know a man that daughter is singer.",
              "A man whose I know daughter is singer.",
            ],
            correct_answer: "I know a man whose daughter is a famous singer.",
            explanation:
              "Adama ait bir şey (kızı) nitelendiği için 'whose' kullanılır.",
          },
          {
            id: "u16_t2_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "A baker is someone ______ makes bread.",
            correct_answer: "who",
            explanation: "Fırıncı (insan) nitelemesi.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Tanımlayıcı Cümlecikler",
        questions: [
          {
            id: "u16_t3_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Hangi kelime hem 'who' hem 'which' yerine kullanılabilir (bazı durumlarda)?",
            options: ["Where", "That", "Whose", "What"],
            correct_answer: "That",
            explanation:
              "'That' hem insanlar hem nesneler için genel bir niteleyicidir.",
          },
          {
            id: "u16_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "The computer ______ I bought yesterday is very fast.",
            correct_answer: "that",
            explanation: "Bilgisayar (nesne) için that/which uygundur.",
          },
          {
            id: "u16_t3_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Cümleyi tamamlayın: 'I like films ...'",
            options: [
              "who have happy endings.",
              "which have happy endings.",
              "where has happy endings.",
              "whose have happy endings.",
            ],
            correct_answer: "which have happy endings.",
            explanation: "Filmler nesne olduğu için which kullanılır.",
          },
          {
            id: "u16_t3_q4",
            type: "sentence_joining",
            difficulty: "hard",
            context: "This is the artist. His paintings are sold for millions.",
            question_text: "Combine using a relative pronoun.",
            options: [
              "This is the artist whose paintings are sold for millions.",
              "This is the artist who his paintings are sold.",
              "The artist which paintings are sold.",
              "This is paintings whose artist is sold.",
            ],
            correct_answer:
              "This is the artist whose paintings are sold for millions.",
            explanation: "Ressama ait tablolar.",
          },
          {
            id: "u16_t3_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "The hotel ______ we stayed was very expensive.",
            correct_answer: "where",
            explanation: "Kaldığımız otel (yer).",
          },
        ],
      },
    ],
  },
  {
    id: 17,
    title: "Deneyimlerin Zirvesi",
    desc: "Present Perfect + Since/For Uygulamaları",
    tests: [
      {
        id: "t1",
        title: "Test 1: Süre vs. Başlangıç",
        questions: [
          {
            id: "u17_t1_q1",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context:
              "I have been a teacher ______ ten years, and I have worked at this school ______ 2018.",
            options: [
              "for / since",
              "since / for",
              "for / for",
              "since / since",
            ],
            correct_answer: "for / since",
            explanation:
              "'For' süreç (10 yıl), 'Since' başlangıç noktası (2018) belirtir.",
          },
          {
            id: "u17_t1_q2",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "Hangisinden sonra 'Since' kullanılır?",
            options: ["two hours", "a long time", "I was a child", "five days"],
            correct_answer: "I was a child",
            explanation:
              "Geçmişteki belirli bir an (Çocukluğumdan beri) başlangıç noktasıdır.",
          },
          {
            id: "u17_t1_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "She has lived in Paris ______ 2010.",
            correct_answer: "since",
            explanation: "Belirli bir yıl başlangıçtır.",
          },
          {
            id: "u17_t1_q4",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context: "We haven't seen each other ______ ages!",
            options: ["for", "since", "during", "while"],
            correct_answer: "for",
            explanation:
              "'Ages' (asırlar/çok uzun zaman) bir süreç miktarıdır.",
          },
          {
            id: "u17_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "How long ______ you lived in this city?",
            correct_answer: "have",
            explanation:
              "You öznesi için present perfect sorusu 'have' ile başlar.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Been vs. Gone",
        questions: [
          {
            id: "u17_t2_q1",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Eğer birisi tatile gitmiş ve 'henüz dönmemişse' hangisi kullanılır?",
            options: [
              "He has been to Paris.",
              "He has gone to Paris.",
              "He was in Paris.",
              "He has in Paris.",
            ],
            correct_answer: "He has gone to Paris.",
            explanation: "Gone: Gitti ve orada. Been: Gitti ve döndü/bulundu.",
          },
          {
            id: "u17_t2_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "A: Where is Sarah? B: She isn't here. She has ______ to the supermarket.",
            correct_answer: "gone",
            explanation:
              "Burada olmadığına göre marketten henüz dönmemiştir (gone).",
          },
          {
            id: "u17_t2_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "'I have been to Italy twice.' ne anlama gelir?",
            options: [
              "Şu an İtalya'dayım.",
              "İtalya'ya hiç gitmedim.",
              "Hayatımda iki kez İtalya'da bulundum (gittim-döndüm).",
              "İtalya'ya gideceğim.",
            ],
            correct_answer:
              "Hayatımda iki kez İtalya'da bulundum (gittim-döndüm).",
            explanation: "Bulunmak/tecrübe etmek anlamında 'been' kullanılır.",
          },
          {
            id: "u17_t2_q4",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context: "A: Have you ______ to China? B: No, never.",
            options: ["gone", "been", "went", "be"],
            correct_answer: "been",
            explanation:
              "Birine tecrübesi sorulurken (Hiç bulundun mu?) 'been' kullanılır.",
          },
          {
            id: "u17_t2_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "They have ______ (work) here for five months.",
            correct_answer: "worked",
            explanation: "Fiilin 3. hali kullanılır.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Karışık Deneyimler",
        questions: [
          {
            id: "u17_t3_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "'She has been sick ... last Monday.' - Boşluğa ne gelir?",
            options: ["for", "since", "yesterday", "ago"],
            correct_answer: "since",
            explanation: "Geçen pazartesiden (başlangıç) beri.",
          },
          {
            id: "u17_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text: "I haven't eaten anything ______ 8 AM.",
            correct_answer: "since",
            explanation: "Saat 8 bir başlangıç noktasıdır.",
          },
          {
            id: "u17_t3_q3",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Present Perfect Tense ile hangi zaman zarfı ASLA kullanılmaz?",
            options: ["Since", "Already", "Yesterday", "Just"],
            correct_answer: "Yesterday",
            explanation:
              "Belli bir geçmiş zaman (Yesterday, 2 years ago) Simple Past ile kullanılır, Present Perfect ile değil.",
          },
          {
            id: "u17_t3_q4",
            type: "contextual_multiple_choice",
            difficulty: "medium",
            context: "We ______ (know) each other for a long time.",
            options: ["have known", "know", "knew", "knowing"],
            correct_answer: "have known",
            explanation: "Geçmişten şimdiye süregelen tanışıklık durumu.",
          },
          {
            id: "u17_t3_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "He hasn't called me ______ three weeks.",
            correct_answer: "for",
            explanation:
              "Üç hafta (süreç miktar) olduğu için 'for' kullanılır.",
          },
        ],
      },
    ],
  },
];

unitsData.forEach((unit) => {
  const fileContent = JSON.stringify(
    {
      unit_id: unit.id,
      unit_title: unit.title,
      tests: unit.tests,
    },
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
