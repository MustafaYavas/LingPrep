import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unitsData = [
  {
    id: 6,
    title: "Anılar ve Dün",
    desc: "Past Simple (Was/Were, Did) & Hikaye Anlatımı",
    tests: [
      {
        id: "t1",
        title: "Test 1: Durum Yanıtları (Was/Were)",
        questions: [
          {
            id: "u6_t1_q1",
            type: "situational_response",
            difficulty: "medium",
            scenario:
              "Dün arkadaşının partisine gidemediğin için ondan özür dilemen ve nedenini açıklaman gerekiyor.",
            question_text:
              "Aşağıdaki ifadelerden hangisi bu durum için uygundur?",
            options: [
              "I am sick today.",
              "I was very tired yesterday, sorry.",
              "I will go to the party.",
              "Were you at the party?",
            ],
            correct_answer: "I was very tired yesterday, sorry.",
            explanation: "Geçmişteki bir mazereti anlatırken 'was' kullanılır.",
          },
          {
            id: "u6_t1_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "Where ____ you last night? (Dün gece neredeydin?)",
            correct_answer: "were",
            explanation: "'You' öznesi için geçmiş zamanda 'were' kullanılır.",
          },
          {
            id: "u6_t1_q3",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "'She wasn't at school.' ne anlama gelir?",
            options: [
              "O okulda.",
              "O okula gidecek.",
              "O okulda değildi.",
              "O okula gitmez.",
            ],
            correct_answer: "O okulda değildi.",
            explanation: "'Wasn't' geçmiş zamanda bulunmama durumunu belirtir.",
          },
          {
            id: "u6_t1_q4",
            type: "situational_response",
            difficulty: "medium",
            scenario: "Bir arkadaşın sana tatilinin nasıl geçtiğini soruyor.",
            question_text:
              "Ona tatilinin harika olduğunu geçmiş zamanlı olarak nasıl söylersin?",
            options: [
              "It is great.",
              "It was fantastic!",
              "I will be fine.",
              "I am on holiday.",
            ],
            correct_answer: "It was fantastic!",
            explanation:
              "Tatilin geçtiği için geçmiş zaman 'was' ile tarif edilir.",
          },
          {
            id: "u6_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "The weather ____ very cold yesterday. (Dün hava çok soğuktu.)",
            correct_answer: "was",
            explanation: "Tekil (it) öznelerinde 'was' kullanılır.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Aksiyon Fiilleri (Did)",
        questions: [
          {
            id: "u6_t2_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "Geçmişte yapılmış bir eylemi sormak için hangi yardımcı fiili kullanırız?",
            options: ["Do", "Does", "Did", "Are"],
            correct_answer: "Did",
            explanation:
              "Tüm özneler için Simple Past Tense sorusu 'Did' ile başlar.",
          },
          {
            id: "u6_t2_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "I ____ (play) tennis last weekend. (Geçen hafta sonu tenis oynadım.)",
            correct_answer: "played",
            explanation: "Düzenli fiillere geçmiş zamanda '-ed' eklenir.",
          },
          {
            id: "u6_t2_q3",
            type: "situational_response",
            difficulty: "medium",
            scenario:
              "Birine dün akşam televizyon izleyip izlemediğini sormak istiyorsun.",
            question_text: "Soru cümlesi hangisidir?",
            options: [
              "Do you watch TV yesterday?",
              "Did you watch TV yesterday?",
              "Are you watching TV?",
              "Will you watch TV?",
            ],
            correct_answer: "Did you watch TV yesterday?",
            explanation:
              "Geçmiş zamanlı bir eylemi 'Did' ve fiilin yalın hali ile sorarız.",
          },
          {
            id: "u6_t2_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "'Go' fiilinin geçmiş zaman hali nedir?",
            options: ["Goes", "Going", "Goed", "Went"],
            correct_answer: "Went",
            explanation: "Go düzensiz bir fiildir ve geçmiş hali 'went' olur.",
          },
          {
            id: "u6_t2_q5",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "We didn't ____ (go) to the cinema. (Sinemaya gitmedik.)",
            correct_answer: "go",
            explanation:
              "'Didn't' yardımcısından sonra fiil tekrar yalın haline döner.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Karışık Alıştırmalar",
        questions: [
          {
            id: "u6_t3_q1",
            type: "situational_response",
            difficulty: "hard",
            scenario:
              "İş görüşmesindesin ve sana daha önce nerede çalıştığını soruyorlar.",
            question_text: "Nasıl profesyonel bir cevap verirsin?",
            options: [
              "I work in a bank now.",
              "I worked as a manager for two years.",
              "I will be a teacher.",
              "I am working here.",
            ],
            correct_answer: "I worked as a manager for two years.",
            explanation:
              "Geçmiş bir tecrübe 'worked' (çalıştım) ifadesi ile anlatılır.",
          },
          {
            id: "u6_t3_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "They ____ (eat) pizza last night. (Dün gece pizza yediler.)",
            correct_answer: "ate",
            explanation:
              "Eat fiilinin 2. hali düzensiz olarak 'ate' şeklinde yazılır.",
          },
          {
            id: "u6_t3_q3",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "Aşağıdakilerden hangisi bir geçmiş zaman zaman zarfı DEĞİLDİR?",
            options: ["Yesterday", "Last year", "Tomorrow", "Two days ago"],
            correct_answer: "Tomorrow",
            explanation: "Tomorrow, gelecek zamana ait bir kelimedir.",
          },
          {
            id: "u6_t3_q4",
            type: "situational_response",
            difficulty: "medium",
            scenario:
              "Arkadaşın cüzdanını bulamıyor. Onu en son masada gördüğünü söyleyeceksin.",
            question_text: "Bunu nasıl ifade edersin?",
            options: [
              "It is on the table.",
              "It will be on the table.",
              "I saw it on the table ten minutes ago.",
              "I see it now.",
            ],
            correct_answer: "I saw it on the table ten minutes ago.",
            explanation: "Görmek (see), geçmiş zamanda 'saw' olur.",
          },
          {
            id: "u6_t3_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "____ she call you yesterday? (Dün seni aradı mı?)",
            correct_answer: "Did",
            explanation: "Soru yapılırken başa 'Did' gelir.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Hayat Tecrübeleri",
    desc: "Present Perfect (Just, Already, Yet)",
    tests: [
      {
        id: "t1",
        title: "Test 1: Already ve Just",
        questions: [
          {
            id: "u7_t1_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Present Perfect Tense'in yardımcı fiilleri nelerdir?",
            options: ["Do / Does", "Did / Was", "Have / Has", "Am / Is / Are"],
            correct_answer: "Have / Has",
            explanation:
              "Present Perfect için 'have' ya da 'has' ve fiilin 3. hali kullanılır.",
          },
          {
            id: "u7_t1_q2",
            type: "situational_response",
            difficulty: "medium",
            scenario:
              "Arkadaşın sana yemek teklif ediyor ama sen daha az önce yemek yedin.",
            question_text: "Bunu İngilizce nasıl ifade edersin?",
            options: [
              "I have just eaten.",
              "I eat every day.",
              "I will eat later.",
              "I already know.",
            ],
            correct_answer: "I have just eaten.",
            explanation:
              "Yakın zamanda tamamlanmış bir eylemi belirtmek için 'just' (az önce) kullanılır.",
          },
          {
            id: "u7_t1_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "She ____ already finished her homework. (O ödevini çoktan bitirdi.)",
            correct_answer: "has",
            explanation: "She öznesi ile 'has' yardımcı fiili kullanılır.",
          },
          {
            id: "u7_t1_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text: "'I have already seen this movie.' ne anlama gelir?",
            options: [
              "Bu filmi görmek istiyorum.",
              "Bu filmi henüz görmedim.",
              "Bu filmi çoktan gördüm.",
              "Bu film az önce başladı.",
            ],
            correct_answer: "Bu filmi çoktan gördüm.",
            explanation: "'Already' (çoktan/zaten) anlamı katar.",
          },
          {
            id: "u7_t1_q5",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text: "I have ____ (just) arrived. (Daha yeni vardım.)",
            correct_answer: "just",
            explanation:
              "Yeni olan bitmiş işlerde yardımcı fiil ile ana fiil arasına 'just' kelimesi girer.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Henüz Değil (Yet)",
        questions: [
          {
            id: "u7_t2_q1",
            type: "situational_response",
            difficulty: "medium",
            scenario:
              "Öğretmen projeni bitirip bitirmediğini soruyor ama sen henüz bitirmedin.",
            question_text: "Nasıl cevap verirsin?",
            options: [
              "I have finished it.",
              "I haven't finished it yet.",
              "I don't like projects.",
              "I will do it already.",
            ],
            correct_answer: "I haven't finished it yet.",
            explanation:
              "Henüz yapılmamış işler için cümlenin sonunda 'yet' ve olumsuz yapı kullanılır.",
          },
          {
            id: "u7_t2_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "Have you called your mom ____? (Anneni henüz aradın mı?)",
            correct_answer: "yet",
            explanation:
              "Soru cümlelerinde 'yet' cümlenin en sonunda yer alır.",
          },
          {
            id: "u7_t2_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "'Yet' kelimesi genelde cümlenin neresinde kullanılır?",
            options: [
              "Cümlenin başında",
              "Fiilden önce",
              "Yardımcı fiilden hemen sonra",
              "Cümlenin en sonunda",
            ],
            correct_answer: "Cümlenin en sonunda",
            explanation: "'Yet' (henüz) çoğunlukla cümle sonundadır.",
          },
          {
            id: "u7_t2_q4",
            type: "situational_response",
            difficulty: "hard",
            scenario:
              "Birisi filmin başlayıp başlamadığını soruyor. Henüz başlamadı.",
            question_text: "Bunu nasıl ifade edersin?",
            options: [
              "It started yesterday.",
              "It hasn't started yet.",
              "It is already running.",
              "It will never start.",
            ],
            correct_answer: "It hasn't started yet.",
            explanation:
              "Henüz başlamayan bir süreç has not + V3 + yet yapısıyla verilir.",
          },
          {
            id: "u7_t2_q5",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "He hasn't arrived ____. (O henüz varmadı.)",
            correct_answer: "yet",
            explanation:
              "Olumsuz Present Perfect cümlelerinde 'henüz' anlamında 'yet' kullanılır.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Karışık Tecrübeler",
        questions: [
          {
            id: "u7_t3_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Hiç Fransa'da bulundun mu? sorusunun doğru çevirisi nedir?",
            options: [
              "Did you go to France?",
              "Have you ever been to France?",
              "Are you in France?",
              "Will you go to France?",
            ],
            correct_answer: "Have you ever been to France?",
            explanation:
              "Hayat boyu edinilmiş tecrübeler için 'Have you ever been...?' kalıbı kullanılır.",
          },
          {
            id: "u7_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "I have ____ (be) to London twice. (Londra'da iki kez bulundum.)",
            correct_answer: "been",
            explanation: "Bulunmak anlamında 'be' fiilinin 3. hali 'been'dir.",
          },
          {
            id: "u7_t3_q3",
            type: "situational_response",
            difficulty: "hard",
            scenario:
              "Yeni bir yemek türü denedin ve o an hayatında yediğin en güzel şey olduğunu düşünüyorsun.",
            question_text: "Nasıl ifade edersin?",
            options: [
              "I didn't eat it.",
              "It is the best food I have ever eaten!",
              "I will eat it later.",
              "I ate it yesterday.",
            ],
            correct_answer: "It is the best food I have ever eaten!",
            explanation:
              "Şimdiye kadarki bir tecrübeyi belirtirken tepe noktasıyla 'have ever eaten' kullanılır.",
          },
          {
            id: "u7_t3_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Cümleyi tamamlayın: 'She ... never eaten sushi.'",
            correct_answer: "has",
            options: ["has", "have", "is", "was"],
            explanation: "She öznesi has alır.",
          },
          {
            id: "u7_t3_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "I have known him ____ 2010. (Onu 2010'dan beri tanıyorum.)",
            correct_answer: "since",
            explanation:
              "Belirli bir başlangıç tarihi verildiğinde 'since' kullanılır.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Gelecek Planları",
    desc: "Be Going To & Will, Hedef Belirleme",
    tests: [
      {
        id: "t1",
        title: "Test 1: Planlar (Be going to)",
        questions: [
          {
            id: "u8_t1_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "Önceden planlanmış kesin bir gelecek olayından bahsederken hangi yapı kullanılır?",
            options: ["Will", "Am/Is/Are going to", "Did", "Present Simple"],
            correct_answer: "Am/Is/Are going to",
            explanation:
              "Önceden alınmış kararlar 'be going to' ile anlatılır.",
          },
          {
            id: "u8_t1_q2",
            type: "situational_response",
            difficulty: "medium",
            scenario:
              "Bir arkadaşına bu yaz tatilini nerede geçirmeyi planladığını söyleyeceksin.",
            question_text: "Hangi cümle doğrudur?",
            options: [
              "I went to Rome last year.",
              "I am going to visit Rome this summer.",
              "I don't like Rome.",
              "I sit in Rome now.",
            ],
            correct_answer: "I am going to visit Rome this summer.",
            explanation:
              "Yazın ziyareti bir plan olduğundan 'am going to' uygundur.",
          },
          {
            id: "u8_t1_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "She ____ going to buy a new car. (O yeni bir araba alacak.)",
            correct_answer: "is",
            explanation: "She öznesi 'is' yardımcı fiilini alır.",
          },
          {
            id: "u8_t1_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "'We are going to stay at a hotel.' cümlesinin anlamı nedir?",
            options: [
              "Otelde kaldık.",
              "Bir otelde kalıyoruz.",
              "Bir otelde kalacağız.",
              "Otel sevmiyoruz.",
            ],
            correct_answer: "Bir otelde kalacağız.",
            explanation: "Gelecek zamana yönelik yapılmış bir plandır.",
          },
          {
            id: "u8_t1_q5",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "They are going ____ watch a movie. (Bir film izleyecekler.)",
            correct_answer: "to",
            explanation: "Yapı eksiksiz olarak 'be going to' şeklindedir.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Tahminler ve Anlık Kararlar (Will)",
        questions: [
          {
            id: "u8_t2_q1",
            type: "situational_response",
            difficulty: "medium",
            scenario:
              "Restorandasın, garson geldi ve siparişini sordu. O an karar verdin.",
            question_text: "Nasıl söylersin?",
            options: [
              "I ordered yesterday.",
              "I will have a steak, please.",
              "I am going to eat steak next year.",
              "I shouldn't eat steak.",
            ],
            correct_answer: "I will have a steak, please.",
            explanation: "Anlık karar ve siparişlerde 'will' kullanılır.",
          },
          {
            id: "u8_t2_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "I think it ____ rain tomorrow. (Bence yarın yağmur yağacak.)",
            correct_answer: "will",
            explanation:
              "Şahsi fikre dayalı tahminlerde 'think' sonrası 'will' kullanılır.",
          },
          {
            id: "u8_t2_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "'Will' kelimesinin olumsuz ve kısaltılmış hali nedir?",
            options: ["Willn't", "Won't", "Wont", "Not will"],
            correct_answer: "Won't",
            explanation: "Will not'ın kısaltması 'won't' olarak yazılır.",
          },
          {
            id: "u8_t2_q4",
            type: "situational_response",
            difficulty: "hard",
            scenario:
              "Birinin çantası çok ağır görünüyor ve ona yardım etmeyi teklif edeceksin.",
            question_text: "Ne dersin?",
            options: [
              "You are going to carry it.",
              "I will help you with that bag.",
              "You didn't help me.",
              "I don't carry bags.",
            ],
            correct_answer: "I will help you with that bag.",
            explanation:
              "Gönüllü olma ve anlık yardım teklifleri 'will' ile verilir.",
          },
          {
            id: "u8_t2_q5",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "____ you marry me? (Benimle evlenir misin?)",
            correct_answer: "Will",
            explanation: "Gelecek teklif ve ricalarında başa 'Will' gelir.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Gelecek Zamanı Genel Anlama",
        questions: [
          {
            id: "u8_t3_q1",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Gökyüzü kapkara bulutlarla kaplı. Yağmur yağacağı çok açık.",
            options: [
              "It will rain.",
              "It is going to rain.",
              "It rains.",
              "It rained.",
            ],
            correct_answer: "It is going to rain.",
            explanation:
              "Elinde somut ve fiziksel bir kanıt varsa (kara bulutlar) 'going to' kullanılır.",
          },
          {
            id: "u8_t3_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "What are you ____ to do tonight? (Bu gece ne yapacaksın?)",
            correct_answer: "going",
            explanation:
              "Plan sorulurken 'are you going to...' kalıbı kurulur.",
          },
          {
            id: "u8_t3_q3",
            type: "situational_response",
            difficulty: "medium",
            scenario:
              "Telefonçalıyor ve odadaki tek kişi sensin. Açmaya karar veriyorsun.",
            question_text: "Bunu nasıl ifade edersin?",
            options: [
              "I will answer it.",
              "I am answering it yesterday.",
              "I didn't answer.",
              "You answer it.",
            ],
            correct_answer: "I will answer it.",
            explanation:
              "Anlık telefon açma reaksiyonları 'will' ile aktarılır.",
          },
          {
            id: "u8_t3_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Aşağıdakilerden hangisi bir gelecek planıdır?",
            options: [
              "I am doing my homework now.",
              "I am going to start a new job next week.",
              "I worked hard.",
              "I read books every day.",
            ],
            correct_answer: "I am going to start a new job next week.",
            explanation: "'next week' (haftaya) kelimesi bir plan bildirir.",
          },
          {
            id: "u8_t3_q5",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text:
              "I promise I ____ be late. (Söz veriyorum geç kalmayacağım.)",
            correct_answer: "won't",
            explanation:
              "Söz verirken (promise) her zaman 'will' veya olumsuzu 'won't' kullanılır.",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Kıyaslamalar",
    desc: "Comparatives & Superlatives, Ölçümler",
    tests: [
      {
        id: "t1",
        title: "Test 1: Comparatives (-er / more)",
        questions: [
          {
            id: "u9_t1_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "İki şeyi birbiriyle karşılaştırırken kısa sıfatların sonuna hangi ek gelir?",
            options: ["-est", "-ing", "-ed", "-er"],
            correct_answer: "-er",
            explanation:
              "Kısa sıfatlar (tall, fast) karşılaştırmalarda sonuna '-er' alır.",
          },
          {
            id: "u9_t1_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "A car is fast____ than a bicycle. (Bir araba bisikletten daha hızlıdır.)",
            correct_answer: "er",
            explanation: "Fast sıfatı 'faster' (daha hızlı) olur.",
          },
          {
            id: "u9_t1_q3",
            type: "situational_response",
            difficulty: "medium",
            scenario:
              "İstanbul'un İzmir'den daha kalabalık (crowded - uzun sıfat) olduğunu söyleyeceksin.",
            question_text: "Bunu en iyi nasıl kurarsın?",
            options: [
              "Istanbul is crowded than Izmir.",
              "Istanbul is crowdeder than Izmir.",
              "Istanbul is more crowded than Izmir.",
              "Istanbul will be crowded.",
            ],
            correct_answer: "Istanbul is more crowded than Izmir.",
            explanation:
              "Uzun sıfatlarda (crowded) '-er' yerine başa 'more' getirilir.",
          },
          {
            id: "u9_t1_q4",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text:
              "My house is bigger ____ yours. (Benim evim seninkinden daha büyüktür.)",
            correct_answer: "than",
            explanation:
              "İki şeyi kıyaslarken karşılaştırılan şeyden önce 'than' (-den/dan) konulur.",
          },
          {
            id: "u9_t1_q5",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "'Good' (İyi) sıfatının karşılaştırma derecesi hali nedir?",
            options: ["Gooder", "More good", "Better", "Best"],
            correct_answer: "Better",
            explanation:
              "'Good' düzensiz bir sıfattır, comparatives hali 'Better' olarak değişir.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Superlatives (-est / the most)",
        questions: [
          {
            id: "u9_t2_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Üç veya daha fazla şey arasından 'En iyi'yi seçerken kısa sıfatlara ne eklenir?",
            options: ["-er", "-est", "-ing", "more"],
            correct_answer: "-est",
            explanation:
              "En üstünlüğü bildirmek (Superlatives) için '-est' kullanılır (tallest, fastest).",
          },
          {
            id: "u9_t2_q2",
            type: "situational_response",
            difficulty: "hard",
            scenario:
              "Sınıftaki en uzun boylu öğrencinin (tall) Ali olduğunu söylemek istiyorsun.",
            question_text: "Doğru cümle hangisidir?",
            options: [
              "Ali is taller student in the class.",
              "Ali is the tallest student in the class.",
              "Ali is more tall student.",
              "Ali is tall.",
            ],
            correct_answer: "Ali is the tallest student in the class.",
            explanation:
              "'En' anlamı verirken sıfatın başına 'the' sonuna ise '-est' eklenir.",
          },
          {
            id: "u9_t2_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "Mount Everest is the high____ mountain in the world.",
            correct_answer: "est",
            explanation: "High (Yüksek) sıfatının en üst hali 'highest' olur.",
          },
          {
            id: "u9_t2_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Dünyadaki 'en pahalı' (expensive) araba demek için hangisi kullanılır?",
            options: [
              "The expensivest car",
              "More expensive car",
              "The most expensive car",
              "The expensive car",
            ],
            correct_answer: "The most expensive car",
            explanation: "Uzun heceli sıfatlarda baştaki ek 'the most' olur.",
          },
          {
            id: "u9_t2_q5",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "This is the ____ (bad) movie I have ever seen! (Bu hayatımda izlediğim en kötü film!)",
            correct_answer: "worst",
            explanation:
              "Bad (Kötü) düzensiz bir sıfattır. En kötü demek için 'worst' kullanılır.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Kıyaslama Senaryoları",
        questions: [
          {
            id: "u9_t3_q1",
            type: "situational_response",
            difficulty: "medium",
            scenario:
              "Telefon alacaksın, Mavi telefon 500$, Kırmızı telefon 900$.",
            question_text: "Bu durumu nasıl özetlersin?",
            options: [
              "The red phone is cheaper than the blue phone.",
              "The red phone is more expensive than the blue phone.",
              "They are the same price.",
              "The blue phone is the most expensive.",
            ],
            correct_answer:
              "The red phone is more expensive than the blue phone.",
            explanation:
              "Kırmızı telefon mavi olandan daha pahalıdır (more expensive).",
          },
          {
            id: "u9_t3_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "She is older ____ her brother.",
            correct_answer: "than",
            explanation:
              "Kıyaslamalarda 'than' kelimesinin kullanılması mecburidir.",
          },
          {
            id: "u9_t3_q3",
            type: "situational_response",
            difficulty: "hard",
            scenario:
              "Takımınızdaki üç kaleci arasında Ahmet antrenmanlarda en iyi performansı gösteriyor.",
            question_text: "Antrenör ona ne der?",
            options: [
              "Ahmet is the better goalkeeper.",
              "Ahmet is the best goalkeeper.",
              "Ahmet is worse.",
              "Ahmet is gooder goalkeeper.",
            ],
            correct_answer: "Ahmet is the best goalkeeper.",
            explanation:
              "3 kişi arasından en iyisi seçildiği için 'best' kullanılır.",
          },
          {
            id: "u9_t3_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "'As ... as' kalıbı (eşitlik) hangi cümlede doğru kullanılmıştır?",
            options: [
              "I am as tall than my father.",
              "I am as tall as my father.",
              "I am as taller as my father.",
              "I as tall am my father.",
            ],
            correct_answer: "I am as tall as my father.",
            explanation:
              "Eşitlik için sıfat ek almadan iki 'as' arasına konur.",
          },
          {
            id: "u9_t3_q5",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text: "Winter is cold____ than spring.",
            correct_answer: "er",
            explanation:
              "Cold (soğuk) kelimesine comparative formda 'er' eklenir.",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Sağlık ve Tavsiyeler",
    desc: "Should, Shouldn't, Must (Doktor Diyalogları)",
    tests: [
      {
        id: "t1",
        title: "Test 1: Hastalıklar ve Advice (Should)",
        questions: [
          {
            id: "u10_t1_q1",
            type: "situational_response",
            difficulty: "medium",
            scenario: "Arkadaşının dişi çok fena ağrıyor ve acı çekiyor.",
            question_text: "Ona vereceğin en mantıklı 'tavsiye' nedir?",
            options: [
              "You should go to a dentist.",
              "You shouldn't go to a doctor.",
              "You must eat more candy.",
              "I have a toothache.",
            ],
            correct_answer: "You should go to a dentist.",
            explanation:
              "Tavsiye verirken 'should' kullanılır ve diş hekimine gitmesi söylenir.",
          },
          {
            id: "u10_t1_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text:
              "I have a headache. I ____ take a painkiller. (Başım ağrıyor, ağrı kesici almalıyım.)",
            correct_answer: "should",
            explanation:
              "Kendi kendine tavsiye veya iyi bir fikir beyan etmek için 'should' kullanılır.",
          },
          {
            id: "u10_t1_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Senin çok yorgun göründüğünü düşünen birisi sana ne tavsiye eder?",
            options: [
              "You shouldn't sleep.",
              "You should rest.",
              "You are tired.",
              "You must run fast.",
            ],
            correct_answer: "You should rest.",
            explanation: "Rest (Dinlenmek) doğru bir tavsiyedir.",
          },
          {
            id: "u10_t1_q4",
            type: "situational_response",
            difficulty: "hard",
            scenario: "Ateşi (fever) olan bir çocuğun ebeveynisin.",
            question_text:
              "Ona ne yapmaması gerektiğini 'shouldn't' ile nasıl söylersin?",
            options: [
              "You should drink cold water.",
              "You shouldn't wear light clothes.",
              "You shouldn't go outside in the cold.",
              "You shouldn't rest.",
            ],
            correct_answer: "You shouldn't go outside in the cold.",
            explanation: "Ateşi olan biri soğukta dışarı çıkmamalıdır.",
          },
          {
            id: "u10_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "You shouldn't ____ (eat) so much junk food. (O kadar çok abur cubur yememelisin.)",
            correct_answer: "eat",
            explanation:
              "Should ve shouldn't yapılarından sonra fiiller her zaman yalın halde bulunur.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Kesin Kurallar ve Uyarılar (Must)",
        questions: [
          {
            id: "u10_t2_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "'Should' ve 'Must' arasındaki temel fark nedir?",
            options: [
              "İkisi tamamen aynıdır.",
              "Must tavsiye, Should zorunluluktur.",
              "Should tavsiye, Must ise sert kural veya güçlü zorunluluktur.",
              "İkisi de geçmiş zaman belirtir.",
            ],
            correct_answer:
              "Should tavsiye, Must ise sert kural veya güçlü zorunluluktur.",
            explanation:
              "Must, yapmamanın olumsuz sonuçlar doğuracağı kurallarda geçer.",
          },
          {
            id: "u10_t2_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "You ____ wear a seatbelt in a car. (Arabada emniyet kemeri takmak zorundasın.)",
            correct_answer: "must",
            explanation: "Yasal bir zorunluluk (kanun) 'must' ile fade edilir.",
          },
          {
            id: "u10_t2_q3",
            type: "situational_response",
            difficulty: "hard",
            scenario: "Hastanenin içinde sigara içilebilecek bir alan yok.",
            question_text: "Duvardaki tabelada hangi kural yazar?",
            options: [
              "You shouldn't smoke.",
              "You don't smoke.",
              "You must not smoke here.",
              "You can smoke here.",
            ],
            correct_answer: "You must not smoke here.",
            explanation:
              "Bir şeyin kati suretle yasak olduğunu bildirmek için 'must not' kullanılır.",
          },
          {
            id: "u10_t2_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Hangi cümle güçlü bir zorunluluk belirtir?",
            options: [
              "You could help me.",
              "You should drink water.",
              "I must finish this report until 5 PM.",
              "I might go to bed.",
            ],
            correct_answer: "I must finish this report until 5 PM.",
            explanation:
              "Zamanında yetiştirilmesi şart olan görevlerde Must kullanılır.",
          },
          {
            id: "u10_t2_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "She has the flu. She ____ see a doctor immediately. (Ağır gripli, acilen doktora gitmek ZORUNDA.)",
            correct_answer: "must",
            explanation:
              "Durumun aciliyet kazandığı anlarda 'should' yerine 'must' kullanımı tercih edilebilir.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Şikayetler",
        questions: [
          {
            id: "u10_t3_q1",
            type: "situational_response",
            difficulty: "easy",
            scenario:
              "Doktora gittin, doktor 'What is the matter with you?' (Neyin var?) dedi.",
            question_text: "Boğazının ağrıdığını nasıl ifade edersin?",
            options: [
              "I have a sore throat.",
              "I have a headache.",
              "I have a broken leg.",
              "I don't have a throat.",
            ],
            correct_answer: "I have a sore throat.",
            explanation:
              "Boğaz ağrısı İngilizcede 'Sore throat' olarak tanımlanır.",
          },
          {
            id: "u10_t3_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "I have a stomach____. (Mide ağrım var.)",
            correct_answer: "ache",
            explanation:
              "Headache, toothache örneklerindeki gibi ağrı anlamındaki ek '-ache'tir.",
          },
          {
            id: "u10_t3_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Eğer birisinin ateşi varsa (fever), hangisini söylemek daha uygundur?",
            options: [
              "Take an aspirin and rest.",
              "Go running outside.",
              "Eat 5 ice creams.",
              "Watch TV all night.",
            ],
            correct_answer: "Take an aspirin and rest.",
            explanation: "Ateşe karşı mantıklı olan aspirin içip dinlenmektir.",
          },
          {
            id: "u10_t3_q4",
            type: "situational_response",
            difficulty: "medium",
            scenario: "Grip oldun ve sürekli burnun akıyor, hapşırıyorsun.",
            question_text: "Durumunu açıklayan ifade hangisidir?",
            options: [
              "I cut my finger.",
              "I have a runny nose and I sneeze a lot.",
              "I sprained my ankle.",
              "My head hurts.",
            ],
            correct_answer: "I have a runny nose and I sneeze a lot.",
            explanation:
              "Burun akıntısı (runny nose) ve hapşırma (sneeze) grip belirtileridir.",
          },
          {
            id: "u10_t3_q5",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "You look pale. Are you ____ sick? (Solgun görünüyorsun. Hasta mı hissediyorsun?)",
            correct_answer: "feeling",
            explanation:
              "Anlık sağlık durumu sorulurken 'Are you feeling...' kullanılır.",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Eğlence ve Hobiler",
    desc: "Adverbs of Manner (Nasıl Yaptın?)",
    tests: [
      {
        id: "t1",
        title: "Test 1: Zarfların Oluşumu (-ly)",
        questions: [
          {
            id: "u11_t1_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "İngilizcede, bir eylemin 'nasıl' yapıldığını söyleyen durum zarfları genelde hangi eki alarak oluşur?",
            options: ["-ing", "-ed", "-ly", "-s"],
            correct_answer: "-ly",
            explanation:
              "Slow -> Slowly (Yavaşça), Quick -> Quickly (Hızlıca) örneklerindeki gibi '-ly' eki kullanılır.",
          },
          {
            id: "u11_t1_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "She speaks very quiet____. (O çok sessiz konuşur.)",
            correct_answer: "ly",
            explanation:
              "Sıfat olan quiet'a, fiili nitelerken -ly eki eklenir.",
          },
          {
            id: "u11_t1_q3",
            type: "situational_response",
            difficulty: "medium",
            scenario:
              "Arkadaşın sokakta çok hızlı bir şekilde araba sürüyor ve sen korkuyorsun.",
            question_text: "Ona ne demelisin?",
            options: [
              "You are driving dangerously!",
              "You drive slow.",
              "Drive carefully, please!",
              "You are a good driver.",
            ],
            correct_answer: "Drive carefully, please!",
            explanation:
              "Tehlikeli durumlarda 'dikkatlice sür' diyerek (carefully) uyarı yaparız.",
          },
          {
            id: "u11_t1_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "'Happy' (Mutlu) kelimesinden 'Mutlulukla' anlamında bir zarf çıkardığımızda nasıl yazılır?",
            options: ["Happyly", "Happily", "Happiness", "Happiest"],
            correct_answer: "Happily",
            explanation:
              "Sonu 'y' ile biten sıfatlarda y düşer ve 'ily' şeklinde zarf yapılır.",
          },
          {
            id: "u11_t1_q5",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "They are singing loud____. (Çok yüksek sesle şarkı söylüyorlar.)",
            correct_answer: "ly",
            explanation: "Yüksek sesle zarfı 'loudly'dir.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Düzensiz Zarflar (Well, Hard, Fast)",
        questions: [
          {
            id: "u11_t2_q1",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "'Good' (İyi) kelimesi, bir eylemi iyi yaptığımızı belirtmek için zarf olarak nasıl kullanılır?",
            options: ["Goodly", "Well", "Better", "Best"],
            correct_answer: "Well",
            explanation:
              "Good sıfatının zarf hali düzensizdir ve 'well' olur (Örn: He plays well).",
          },
          {
            id: "u11_t2_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "She speaks English very ____ (good). (İngilizceyi çok iyi konuşur.)",
            correct_answer: "well",
            explanation:
              "Bir eylemin iyi yapıldığını anlatırken 'well' kelimesi kullanılır.",
          },
          {
            id: "u11_t2_q3",
            type: "situational_response",
            difficulty: "hard",
            scenario:
              "Bir koşu yarışındasın ve rakibin adeta uçarcasına koşuyor.",
            question_text: "Onun için ne söylersin?",
            options: [
              "He runs fastly.",
              "He runs fast.",
              "He runs slow.",
              "He is a fast.",
            ],
            correct_answer: "He runs fast.",
            explanation:
              "Fast kelimesi hem sıfattır hem zarftır, '-ly' almaz (fastly yanlıştır).",
          },
          {
            id: "u11_t2_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "'I worked ____ today.' (Bugün çok sıkı çalıştım.) - Boşluğa ne gelir?",
            options: ["hard", "hardly", "hards", "more hard"],
            correct_answer: "hard",
            explanation:
              "Hard da fast gibi ek almayan bir zarftır. 'Hardly' farklı bir kelimedir (neredeyse hiç).",
          },
          {
            id: "u11_t2_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "Don't drive so ____! (Bu kadar hızlı sürme!)",
            correct_answer: "fast",
            explanation: "Hız için 'fast' zarf olarak kullanılır.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Hobileri Tarif Etme",
        questions: [
          {
            id: "u11_t3_q1",
            type: "situational_response",
            difficulty: "easy",
            scenario:
              "Birine piyano çalmayı hobi olarak edinip edinmediğini soracaksın.",
            question_text: "Bunu nasıl sorarsın?",
            options: [
              "Do you play the piano?",
              "Did you play yesterday?",
              "Are you a piano?",
              "Will you play?",
            ],
            correct_answer: "Do you play the piano?",
            explanation: "Hobiler geniş zamanla ifade edilir.",
          },
          {
            id: "u11_t3_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "He paints beauti____. (Manzaraları çok güzel resmeder.)",
            correct_answer: "fully",
            explanation:
              "Beautiful sıfatının zarf hali 'beautifully' şeklindedir.",
          },
          {
            id: "u11_t3_q3",
            type: "situational_response",
            difficulty: "hard",
            scenario:
              "Gitar derslerine başladın, arkadaşın sana çalmayı öğretmesini istiyor ancak sen henüz çok iyi değilsin.",
            question_text: "Ne dersin?",
            options: [
              "I play very well.",
              "I play terribly.",
              "I don't play badly.",
              "You should play it.",
            ],
            correct_answer: "I play terribly.",
            explanation:
              "Mütevazı bir şekilde yeteneğinin henüz zayıf olduğunu (terribly) belirterek cevap verilir.",
          },
          {
            id: "u11_t3_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Zarfların (adverbs of manner) cümlerki doğalyeri neresidir?",
            options: [
              "Cümlenin en başında",
              "Özneden hemen sonra",
              "Fiilden veya cümlenin nesnesinden sonra",
              "İki sıfatın ortasında",
            ],
            correct_answer: "Fiilden veya cümlenin nesnesinden sonra",
            explanation:
              "Örn: He drives (fiil) carefully (zarf) veya He speaks English (nesne) fluently (zarf).",
          },
          {
            id: "u11_t3_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "My sister dances ____ (kötü bir şekilde)",
            correct_answer: "badly",
            explanation:
              "Kötü anlamına gelen bad, zarf olurken 'badly' formunu alır.",
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
