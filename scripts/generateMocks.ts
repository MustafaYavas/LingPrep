import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import type { QuizUnit } from "./types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unitsData: { id: number; title: string; tests: any[] }[] = [
  {
    id: 1,
    title: "Merhaba Dünya!",
    tests: [
      {
        id: "t1",
        title: "Test 1: Tanışma",
        questions: [
          {
            id: "u1_t1_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "Merhaba İngilizcede nasıl söylenir?",
            options: ["Hello", "Goodbye", "Please", "Thanks"],
            correct_answer: "Hello",
            explanation: "'Hello', 'Merhaba' demektir.",
          },
          {
            id: "u1_t1_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "____ morning! (Günaydın!)",
            correct_answer: "Good",
            explanation: "Günaydın 'Good morning' şeklinde yazılır.",
          },
          {
            id: "u1_t1_q3",
            type: "true_false",
            difficulty: "easy",
            question_text: "'Goodbye' kelimesi 'Teşekkürler' anlamına gelir.",
            correct_answer: "false",
            explanation: "'Goodbye', 'Hoşça kal' demektir.",
          },
          {
            id: "u1_t1_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Biri sana 'How are you?' (Nasılsın?) diye sorduğunda en iyi cevap ne olur?",
            options: [
              "I am fine, thanks.",
              "I am an apple.",
              "Hello.",
              "Goodbye.",
            ],
            correct_answer: "I am fine, thanks.",
            explanation:
              "'I am fine, thanks' (İyiyim, teşekkürler) klasik bir cevaptır.",
          },
          {
            id: "u1_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "What is ____ name? (Senin adın ne?)",
            correct_answer: "your",
            explanation:
              "Senin anlamına gelen iyelik zamiri 'your' sözcüğüdür.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Alfabe",
        questions: [
          {
            id: "u1_t2_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "İngiliz alfabesinin ilk harfi hangisidir?",
            options: ["A", "B", "C", "D"],
            correct_answer: "A",
            explanation: "Her iki alfabede de ilk harf A'dır.",
          },
          {
            id: "u1_t2_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "A, B, C, ____, E",
            correct_answer: "D",
            explanation: "C harfinden sonra D harfi gelir.",
          },
          {
            id: "u1_t2_q3",
            type: "true_false",
            difficulty: "easy",
            question_text: "İngiliz alfabesinde 'Ş' harfi bulunur.",
            correct_answer: "false",
            explanation:
              "İngiliz alfabesinde Ç, Ş, Ğ, Ö, Ü gibi harfler bulunmaz.",
          },
          {
            id: "u1_t2_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "'Dog' (Köpek) kelimesi hangi harflerden oluşur?",
            options: ["D-O-G", "C-A-T", "P-E-N", "B-O-X"],
            correct_answer: "D-O-G",
            explanation: "'Dog' kelimesi D, O, G harfleriyle yazılır.",
          },
          {
            id: "u1_t2_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "E, F, G, ____, I, J",
            correct_answer: "H",
            explanation: "G ve I harflerinin arasında H harfi bulunur.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Genel Tekrar",
        questions: [
          {
            id: "u1_t3_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "İyi akşamlar İngilizcede hangi kelime öbeğidir?",
            options: [
              "Good afternoon",
              "Good evening",
              "Good night",
              "Good morning",
            ],
            correct_answer: "Good evening",
            explanation: "Akşam saatlerinde 'Good evening' kullanılır.",
          },
          {
            id: "u1_t3_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "See ____ later. (Sonra görüşürüz.)",
            correct_answer: "you",
            explanation:
              "Sonra görüşmek üzere anlamında 'See you later' kalıbı yaygındır.",
          },
          {
            id: "u1_t3_q3",
            type: "true_false",
            difficulty: "easy",
            question_text: "'Yes' kelimesi 'Hayır' demektir.",
            correct_answer: "false",
            explanation: "'Yes', 'Evet' anlamına gelir.",
          },
          {
            id: "u1_t3_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Hangi kelime vedalaşırken KULLANILMAZ?",
            options: ["Bye", "See you", "Hello", "Take care"],
            correct_answer: "Hello",
            explanation: "'Hello' bir karşılaşma ve selamlama sözcüğüdür.",
          },
          {
            id: "u1_t3_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "My name ____ Ali. (Benim adım Ali.)",
            correct_answer: "is",
            explanation:
              "İsim belirtilirken 'to be' (olmak) fiilinin 3. tekil şahıs çekimi olan 'is' kullanılır.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Bu Nedir?",
    tests: [
      {
        id: "t1",
        title: "Test 1: Bu ve Şu",
        questions: [
          {
            id: "u2_t1_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "Yakındaki tekil bir nesneyi işaret ederken ne kullanılır?",
            options: ["That", "These", "This", "Those"],
            correct_answer: "This",
            explanation:
              "'This' (Bu) yakındaki tekil nesneler için kullanılır.",
          },
          {
            id: "u2_t1_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "____ is an apple. (Şu bir elmadır.)",
            correct_answer: "That",
            explanation: "Uzaktaki nesne için 'That' (Şu/O) kullanılır.",
          },
          {
            id: "u2_t1_q3",
            type: "true_false",
            difficulty: "easy",
            question_text:
              "'These' (Bunlar), yakındaki çoğul nesneler için kullanılır.",
            correct_answer: "true",
            explanation: "'These', 'This' sözcüğünün çoğuludur.",
          },
          {
            id: "u2_t1_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Uzaktaki birden fazla arabayı işaret ederken ne kullanırsın?",
            options: ["These cars", "This car", "Those cars", "That car"],
            correct_answer: "Those cars",
            explanation: "'Those', uzaktaki çoğul nesneler için kullanılır.",
          },
          {
            id: "u2_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "What ____ this? (Bu nedir?)",
            correct_answer: "is",
            explanation: "Tekil işaret zamirleriyle birlikte 'is' kullanılır.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Sınıf Eşyaları",
        questions: [
          {
            id: "u2_t2_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "Kitap İngilizcede ne demektir?",
            options: ["Book", "Pen", "Desk", "Bag"],
            correct_answer: "Book",
            explanation: "Book, kitap demektir.",
          },
          {
            id: "u2_t2_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "This is a ____. (Bu bir kalemdir.)",
            correct_answer: "pen",
            explanation:
              "Kalem İngilizcede 'pen' (tükenmez) veya 'pencil' (kurşun) olarak bilinir.",
          },
          {
            id: "u2_t2_q3",
            type: "true_false",
            difficulty: "easy",
            question_text: "'Desk' kelimesi 'Sandalye' anlamına gelir.",
            correct_answer: "false",
            explanation:
              "'Desk' çalışma masası/sıra anlamına gelir. Sandalye 'chair'dır.",
          },
          {
            id: "u2_t2_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Tahtaya yazı yazmak için öğretmenin kullandığı nesne hangisidir?",
            options: ["Bag", "Board marker", "Eraser", "Notebook"],
            correct_answer: "Board marker",
            explanation: "Tahta kalemi 'board marker' olarak adlandırılır.",
          },
          {
            id: "u2_t2_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "I write in my ____. (Defterime yazarım.)",
            correct_answer: "notebook",
            explanation: "Defterin İngilizce karşılığı 'notebook'tur.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Karışık",
        questions: [
          {
            id: "u2_t3_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "Hangi kelime bir pencereyi ifade eder?",
            options: ["Window", "Door", "Wall", "Floor"],
            correct_answer: "Window",
            explanation: "Window, pencere anlamına gelir.",
          },
          {
            id: "u2_t3_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "Open the ____. (Kapıyı aç.)",
            correct_answer: "door",
            explanation: "Kapı kelimesinin İngilizcesi 'door'dur.",
          },
          {
            id: "u2_t3_q3",
            type: "true_false",
            difficulty: "easy",
            question_text:
              "Zıt anlamlılar konusunda 'Open', 'Kapatmak' demektir.",
            correct_answer: "false",
            explanation: "Open 'Açmak', Close 'Kapatmak'tır.",
          },
          {
            id: "u2_t3_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Resimde bir saat var. Ona ne deriz?",
            options: ["Clock", "Television", "Laptop", "Bag"],
            correct_answer: "Clock",
            explanation: "Duvar veya masa saati 'clock' olarak ifade edilir.",
          },
          {
            id: "u2_t3_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "This is ____ computer. (Bu bir bilgisayar.)",
            correct_answer: "a",
            explanation:
              "Sessiz harfle başlayan tekil bir ismin önüne 'a' belgisiz tanımlığı gelir.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Benim Dünyam",
    tests: [
      {
        id: "t1",
        title: "Test 1: İyelik Sıfatları",
        questions: [
          {
            id: "u3_t1_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "'Benim' anlamına gelen İngilizce kelime hangisidir?",
            options: ["My", "Your", "His", "Their"],
            correct_answer: "My",
            explanation: "'My' benim demektir.",
          },
          {
            id: "u3_t1_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "This is ____ house. (Bu onun evi. - Erkek için)",
            correct_answer: "his",
            explanation: "Erkekler için iyelik sıfatı 'his'tir.",
          },
          {
            id: "u3_t1_q3",
            type: "true_false",
            difficulty: "easy",
            question_text:
              "Kadınlar için 'onun' demek istediğimizde 'Her' kelimesi kullanılır.",
            correct_answer: "true",
            explanation: "Kadınlar için iyelik sıfatı 'her'dir.",
          },
          {
            id: "u3_t1_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "'The dog is playing with ___ toy.' cümlesindeki boşluğa ne gelmelidir?",
            options: ["its", "it", "his", "her"],
            correct_answer: "its",
            explanation:
              "Hayvanlar ve cansız varlıklar için iyelik sıfatı 'its'tir.",
          },
          {
            id: "u3_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "____ names are Ali and Veli. (Onların adları Ali ve Veli'dir.)",
            correct_answer: "Their",
            explanation: "Onların anlamına gelen iyelik sıfatı 'Their'dir.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Aile Üyeleri",
        questions: [
          {
            id: "u3_t2_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "Anne kelimesinin İngilizcesi nedir?",
            options: ["Mother", "Father", "Sister", "Brother"],
            correct_answer: "Mother",
            explanation: "Mother, anne demektir.",
          },
          {
            id: "u3_t2_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "He is my ____. (O benim babam.)",
            correct_answer: "father",
            explanation: "Baba kelimesinin İngilizcesi 'father'dır.",
          },
          {
            id: "u3_t2_q3",
            type: "true_false",
            difficulty: "easy",
            question_text: "'Sister' kelimesi erkek kardeş anlamına gelir.",
            correct_answer: "false",
            explanation:
              "Sister 'kız kardeş', Brother 'erkek kardeş' demektir.",
          },
          {
            id: "u3_t2_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Büyükbaba anlamına gelen doğru kelime hangisidir?",
            options: ["Grandfather", "Uncle", "Aunt", "Cousin"],
            correct_answer: "Grandfather",
            explanation:
              "Büyükbaba/Dede İngilizcede 'Grandfather' olarak bilinir.",
          },
          {
            id: "u3_t2_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "She is my ____. (O benim teyzem/halam.)",
            correct_answer: "aunt",
            explanation: "Teyze veya hala için 'aunt' kullanılır.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: 's Takısı Sahiplik",
        questions: [
          {
            id: "u3_t3_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "'Ali'nin arabası' İngilizcede nasıl söylenir?",
            options: ["Ali's car", "Car Ali", "Ali car", "The car of Ali's"],
            correct_answer: "Ali's car",
            explanation:
              "Özel isimlerin sonuna gelen 's takısı sahiplik bildirir.",
          },
          {
            id: "u3_t3_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "This is my ____ bag. (Bu annemin çantası.)",
            correct_answer: "mother's",
            explanation: "Annemin demek için mother kelimesine 's eklenir.",
          },
          {
            id: "u3_t3_q3",
            type: "true_false",
            difficulty: "easy",
            question_text:
              "'Cats tail' ifadesi 'Kedi kuyruğu' olarak tamamen doğru yazılmıştır.",
            correct_answer: "false",
            explanation:
              "Sahiplik bildirmek için kesme işareti gerekir: Cat's tail.",
          },
          {
            id: "u3_t3_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Çoğul ve 's' ile biten isimlerde sahiplik eki nasıl gösterilir? (Örn: Öğrencilerin kitapları)",
            options: [
              "students's books",
              "students' books",
              "students books",
              "student's books",
            ],
            correct_answer: "students' books",
            explanation:
              "Düzenli çoğulların sonuna sadece kesme işareti (') konur.",
          },
          {
            id: "u3_t3_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "We are at ____ house. (John'un evindeyiz.)",
            correct_answer: "John's",
            explanation:
              "John adına sahiplik eki getirmek için John's kullanılır.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Sıradan Bir Gün",
    tests: [
      {
        id: "t1",
        title: "Test 1: Günlük Rutin Fiilleri",
        questions: [
          {
            id: "u4_t1_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "Sabah uyanmak anlamına gelen ifade hangisidir?",
            options: ["Wake up", "Sleep", "Walk", "Eat"],
            correct_answer: "Wake up",
            explanation: "Wake up, uyanmak demektir.",
          },
          {
            id: "u4_t1_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text:
              "I ____ breakfast at 8:00. (Saat 8'de kahvaltı yaparım.)",
            correct_answer: "have",
            explanation:
              "Kahvaltı yapmak 'have breakfast' veya 'eat breakfast' olarak söylenir.",
          },
          {
            id: "u4_t1_q3",
            type: "true_false",
            difficulty: "easy",
            question_text: "'Brush teeth' ifadesi saçı taramak anlamına gelir.",
            correct_answer: "false",
            explanation: "'Brush teeth' dişleri fırçalamak demektir.",
          },
          {
            id: "u4_t1_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Evde hazırlanıp dışarı çıkarken hangi ifadeyi kullanırız?",
            options: ["Leave home", "Come home", "Stay home", "Clean home"],
            correct_answer: "Leave home",
            explanation: "Evden ayrılmak, dışarı çıkmak 'Leave home' demektir.",
          },
          {
            id: "u4_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "I ____ to bed at 11 PM. (Saat 11'de yatmaya giderim.)",
            correct_answer: "go",
            explanation:
              "Yatmaya gitmek, uyumak 'go to bed' kalıbıyla ifade edilir.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Geniş Zaman (I/You/We/They)",
        questions: [
          {
            id: "u4_t2_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "Geniş zamanla kurulan cümlelerde, 'I' öznesiyle ('go' fiili için) hangisi doğrudur?",
            options: ["I go", "I goes", "I going", "I is go"],
            correct_answer: "I go",
            explanation:
              "I, You, We, They özneleriyle fiil yalın halde (ek almadan) kullanılır.",
          },
          {
            id: "u4_t2_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "We ____ books every day. (Her gün kitap okuruz.)",
            correct_answer: "read",
            explanation: "'We' öznesiyle fiil yalın haldedir (read).",
          },
          {
            id: "u4_t2_q3",
            type: "true_false",
            difficulty: "easy",
            question_text:
              "Geniş zamanda 'Onlar' öznesi için fiil daima 's' takısı alır.",
            correct_answer: "false",
            explanation: "Onlar (They) öznesinde fiil ek almaz.",
          },
          {
            id: "u4_t2_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Aşağıdaki olumsuz cümlelerden hangisi doğrudur?",
            options: [
              "They don't work.",
              "They doesn't work.",
              "They not work.",
              "They aren't work.",
            ],
            correct_answer: "They don't work.",
            explanation:
              "I, You, We, They için olumsuz yardımcı fiil 'don't' kelimesidir.",
          },
          {
            id: "u4_t2_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "____ you like tennis? (Tenis sever misin?)",
            correct_answer: "Do",
            explanation:
              "You öznesine geniş zamanda soru sorarken cümlenin başına 'Do' yardımcı fiili gelir.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Geniş Zaman (He/She/It)",
        questions: [
          {
            id: "u4_t3_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "He/She/It özneleri ile geniş zamanda olumlu cümlede fiile hangi ek gelir?",
            options: ["-s / -es / -ies", "-ing", "-ed", "-er"],
            correct_answer: "-s / -es / -ies",
            explanation:
              "Üçüncü tekil şahıslarda fiile geniş zamanda genellikle -s eklenir.",
          },
          {
            id: "u4_t3_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "He ____ to the park. (O parka gider.)",
            correct_answer: "goes",
            explanation: "'go' fiiline He öznesiyle '-es' (goes) eklenir.",
          },
          {
            id: "u4_t3_q3",
            type: "true_false",
            difficulty: "easy",
            question_text:
              "'She plays volleyball' cümlesi doğru bir geniş zaman cümlesidir.",
            correct_answer: "true",
            explanation: "'She' öznesiyle 'play' fiiline s takısı gelmiştir.",
          },
          {
            id: "u4_t3_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "He/She/It ile olumsuz cümle yaparken hangi yardımcı fiili kullanırız?",
            options: ["doesn't", "don't", "isn't", "hasn't"],
            correct_answer: "doesn't",
            explanation:
              "Geniş zamanda 3. tekil şahıslar için 'doesn't' (does not) kullanılır.",
          },
          {
            id: "u4_t3_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "____ she study English? (O İngilizce çalışır mı?)",
            correct_answer: "Does",
            explanation:
              "'She' öznesiyle soru cümlesi kurarken başa 'Does' getirilir.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Acıktım!",
    tests: [
      {
        id: "t1",
        title: "Test 1: Yiyecek İsimleri",
        questions: [
          {
            id: "u5_t1_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "Elma İngilizcede ne demektir?",
            options: ["Apple", "Banana", "Orange", "Grape"],
            correct_answer: "Apple",
            explanation: "'Apple' elma demektir.",
          },
          {
            id: "u5_t1_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text:
              "I eat ____ for breakfast. (Kahvaltıda ekmek yerim.)",
            correct_answer: "bread",
            explanation: "Ekmek kelimesi 'bread'tir.",
          },
          {
            id: "u5_t1_q3",
            type: "true_false",
            difficulty: "easy",
            question_text: "'Cheese' peynir anlamına gelir.",
            correct_answer: "true",
            explanation: "'Cheese' bildiğimiz peynirdir.",
          },
          {
            id: "u5_t1_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Hangi kelime bir meyveyi ifade eder?",
            options: ["Strawberry", "Chicken", "Beef", "Rice"],
            correct_answer: "Strawberry",
            explanation:
              "'Strawberry' çilek demektir, diğerleri et veya pirinç/pilavdır.",
          },
          {
            id: "u5_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "A red vegetable: ____. (Kırmızı bir sebze: Domates)",
            correct_answer: "Tomato",
            explanation: "Domates İngilizcede 'tomato'dur.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: İçecekler",
        questions: [
          {
            id: "u5_t2_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "Su İngilizcede ne demektir?",
            options: ["Water", "Milk", "Tea", "Coffee"],
            correct_answer: "Water",
            explanation: "Su 'water' olarak yazılır.",
          },
          {
            id: "u5_t2_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text: "I drink a glass of ____. (Bir bardak süt içerim.)",
            correct_answer: "milk",
            explanation: "Süt 'milk' kelimesiyle ifade edilir.",
          },
          {
            id: "u5_t2_q3",
            type: "true_false",
            difficulty: "easy",
            question_text: "Türkler kahvaltıda genellikle 'Tea' içerler.",
            correct_answer: "true",
            explanation: "'Tea' çay demektir ve bu bilgi doğrudur.",
          },
          {
            id: "u5_t2_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Meyveden sıkılan içeceklere ne ad verilir?",
            options: ["Juice", "Soup", "Coke", "Cola"],
            correct_answer: "Juice",
            explanation: "Meyve suyu anlamına gelen sözcük 'juice'tur.",
          },
          {
            id: "u5_t2_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "Would you like some ____? (Biraz kahve ister misin?)",
            correct_answer: "coffee",
            explanation: "Kahve 'coffee' şeklinde yazılır.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Restoranda Sipariş",
        questions: [
          {
            id: "u5_t3_q1",
            type: "multiple_choice",
            difficulty: "easy",
            question_text:
              "Bir garson sana 'Ne istersiniz?' diye sorarken hangi cümleyi kullanır?",
            options: [
              "What would you like?",
              "Who are you?",
              "Where is the apple?",
              "Why are you here?",
            ],
            correct_answer: "What would you like?",
            explanation:
              "Sipariş alırken nazik bir ifade olan 'What would you like?' sıkça kullanılır.",
          },
          {
            id: "u5_t3_q2",
            type: "fill_in_blank",
            difficulty: "easy",
            question_text:
              "Can I ____ the menu, please? (Menüyü alabilir miyim lütfen?)",
            correct_answer: "have",
            explanation: "Bir şey isterken 'Can I have...?' kalıbı kullanılır.",
          },
          {
            id: "u5_t3_q3",
            type: "true_false",
            difficulty: "easy",
            question_text:
              "Garson siparişi bitirirken 'Anything else?' (Başka bir şey?) diye sorabilir.",
            correct_answer: "true",
            explanation:
              "'Anything else' başka bir isteğiniz var mı anlamında yaygındır.",
          },
          {
            id: "u5_t3_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Hesabı ödemek istediğinde garsona ne dersin?",
            options: [
              "The bill, please.",
              "The table, please.",
              "The plate, please.",
              "The glass, please.",
            ],
            correct_answer: "The bill, please.",
            explanation:
              "Hesap veya adisyon 'bill' (veya 'check') olarak adlandırılır.",
          },
          {
            id: "u5_t3_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "I would like to ____ a soup. (Bir çorba sipariş vermek istiyorum.)",
            correct_answer: "order",
            explanation: "Sipariş vermek anlamında 'order' fiili kullanılır.",
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
