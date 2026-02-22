import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unitsData = [
  {
    id: 18,
    title: "Kişisel Gelişim",
    desc: "Gerunds & Infinitives",
    tests: [
      {
        id: "t1",
        title: "Test 1: Alışkanlık Analizi",
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
          {
            id: "u18_t1_q2",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Don't forget ______ (buy) some milk on your way home.",
            options: ["buying", "to buy", "buy", "bought"],
            correct_answer: "to buy",
            explanation:
              "Gelecekte yapılması gereken bir görev hatırlatılırken 'forget + Infinitive' kullanılır.",
          },
          {
            id: "u18_t1_q3",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "Studying for long hours makes me ______ (feel) exhausted.",
            correct_answer: "feel",
            explanation:
              "'Make' fiilinden sonra nesne gelirse fiil yalın halde (bare infinitive) kullanılır.",
          },
          {
            id: "u18_t1_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "I'm looking forward to ______ (meet) you in person.",
            options: ["meet", "meeting", "to meet", "met"],
            correct_answer: "meeting",
            explanation:
              "'Look forward to' kalıbındaki 'to' bir edattır (preposition), bu yüzden arkasından Gerund gelir.",
          },
          {
            id: "u18_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "It is not worth ______ (worry) about small things.",
            correct_answer: "worrying",
            explanation: "'It's worth' yapısından sonra Gerund kullanılır.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Motivasyon ve Kararlar",
        questions: [
          {
            id: "u18_t2_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "She suggested ______ (take) a break before continuing the project.",
            options: ["to take", "taking", "take", "to taking"],
            correct_answer: "taking",
            explanation: "'Suggest' fiilinden sonra doğrudan Gerund gelir.",
          },
          {
            id: "u18_t2_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "I avoided ______ (answer) his personal questions during the interview.",
            correct_answer: "answering",
            explanation: "'Avoid' fiili Gerund ile kullanılır.",
          },
          {
            id: "u18_t2_q3",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "The coach made the players ______ (run) ten laps around the field.",
            options: ["to run", "running", "run", "to running"],
            correct_answer: "run",
            explanation:
              "Zorunluluk bildiren 'make someone do something' yapısı.",
          },
          {
            id: "u18_t2_q4",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "They managed ______ (finish) the task just in time.",
            correct_answer: "to finish",
            explanation: "'Manage' fiili Infinitive ile kullanılır.",
          },
          {
            id: "u18_t2_q5",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Hangi fiil hem Gerund hem Infinitive alırken ANLAMI DEĞİŞMEZ?",
            options: ["Remember", "Stop", "Begin", "Forget"],
            correct_answer: "Begin",
            explanation:
              "Begin, start, continue gibi fiiller her iki yapıyla da benzer anlamda kullanılabilir.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Karma Zorluklar",
        questions: [
          {
            id: "u18_t3_q1",
            type: "multiple_choice",
            difficulty: "expert",
            question_text:
              "I regret ______ (tell) him the secret. Now everyone knows it.",
            options: ["telling", "to tell", "tell", "told"],
            correct_answer: "telling",
            explanation:
              "Yapılmış bir eylemden duyulan pişmanlık Gerund ile anlatılır.",
          },
          {
            id: "u18_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "We regret ______ (inform) you that your application was unsuccessful.",
            correct_answer: "to inform",
            explanation:
              "Resmi bir duyuru veya üzücü haber verirken 'regret + Infinitive' kullanılır.",
          },
          {
            id: "u18_t3_q3",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "He stopped ______ (smoke) two years ago to improve his health.",
            options: ["to smoke", "smoking", "smoke", "to smoking"],
            correct_answer: "smoking",
            explanation:
              "Bir alışkanlığı tamamen bırakmak Gerund ile anlatılır.",
          },
          {
            id: "u18_t3_q4",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "On the way to work, he stopped ______ (buy) a newspaper.",
            correct_answer: "to buy",
            explanation:
              "Bir amaç için durmak 'stop + Infinitive' ile anlatılır.",
          },
          {
            id: "u18_t3_q5",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "I can't imagine ______ (live) in such a cold city.",
            options: ["living", "to live", "live", "to living"],
            correct_answer: "living",
            explanation: "'Imagine' fiilinden sonra Gerund gelir.",
          },
        ],
      },
    ],
  },
  {
    id: 19,
    title: "Suç ve Adalet",
    desc: "Modals of Deduction (Geçmiş ve Günümüz)",
    tests: [
      {
        id: "t1",
        title: "Test 1: Gizemli Olaylar",
        questions: [
          {
            id: "u19_t1_q1",
            type: "inference_analysis",
            difficulty: "medium",
            question_text:
              "The suspect has a perfect alibi for the night of the crime. Therefore, he ______ (commit) the murder.",
            options: [
              "must have committed",
              "can't have committed",
              "might have committed",
              "should have committed",
            ],
            correct_answer: "can't have committed",
            explanation:
              "Kesin bir kanıt (alibi) varsa 'can't have + V3' ile imkansızlık vurgulanır.",
          },
          {
            id: "u19_t1_q2",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Look! The window is broken. Someone ______ (break) into the house last night.",
            options: [
              "must have broken",
              "can't have broken",
              "might have broken",
              "needn't have broken",
            ],
            correct_answer: "must have broken",
            explanation:
              "Güçlü bir kanıt karşısında geçmişe dair çıkarım 'must have + V3' ile yapılır.",
          },
          {
            id: "u19_t1_q3",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "She ______ (forget) our meeting. I'm not sure, but she is very busy lately.",
            correct_answer: "might have forgotten",
            explanation:
              "Düşük ihtimal bildirmek için might/may have + V3 kullanılır.",
          },
          {
            id: "u19_t1_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "He ______ (know) about the surprise because he was at the party.",
            options: [
              "must know",
              "must have known",
              "can't know",
              "should know",
            ],
            correct_answer: "must have known",
            explanation:
              "Geçmişte partide olduğu için bilmiş olması kuvvetle muhtemeldir.",
          },
          {
            id: "u19_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "They are very rich. They ______ (have) a lot of money.",
            correct_answer: "must have",
            explanation:
              "Şimdiki zamana dair güçlü çıkarım 'must + V1' ile yapılır.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Çıkarım ve Analiz",
        questions: [
          {
            id: "u19_t2_q1",
            type: "inference_analysis",
            difficulty: "hard",
            question_text:
              "The safe was empty, but there were no signs of a break-in. The thief ______ (have) a key.",
            options: [
              "must have had",
              "might not have",
              "can't have had",
              "should have had",
            ],
            correct_answer: "must have had",
            explanation:
              "Zorlama izi yoksa anahtarının olması neredeyse kesindir.",
          },
          {
            id: "u19_t2_q2",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "A: Who is that man? B: He ______ (be) the new detective; he is wearing a badge.",
            options: ["must be", "can't be", "might have been", "couldn't be"],
            correct_answer: "must be",
            explanation: "Rozet taktığına göre detektif olması muhtemeldir.",
          },
          {
            id: "u19_t2_q3",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "You ______ (not / see) John at the mall yesterday. He's been in Spain for a month.",
            correct_answer: "can't have seen",
            explanation:
              "İspanya'da olduğu bilinen biri için 'görmüş olamazsın' demek gerekir.",
          },
          {
            id: "u19_t2_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Hangi modal 'düşük ihtimal' bildirir?",
            options: ["Must", "Can't", "Could", "Should"],
            correct_answer: "Could",
            explanation:
              "Could, might, may düşük/orta ihtimal çıkarımları için kullanılır.",
          },
          {
            id: "u19_t2_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "It ______ (rain) during the night. The ground is still wet.",
            correct_answer: "must have rained",
            explanation: "Yerin ıslak olması kanıttır.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Zorlu Senaryolar",
        questions: [
          {
            id: "u19_t3_q1",
            type: "inference_analysis",
            difficulty: "expert",
            question_text:
              "She didn't answer my call, but she ______ (be) asleep since it was 3 AM.",
            options: [
              "must have been",
              "could have been",
              "can't have been",
              "should be",
            ],
            correct_answer: "could have been",
            explanation: "Gece 3 olduğu için uyuyor olabilirdi (ihtimal).",
          },
          {
            id: "u19_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "The jewelry ______ (be) stolen by an insider. No one else knew the code.",
            correct_answer: "must have been",
            explanation:
              "Başkası kodu bilmiyorsa içeriden biri çalmış olmalıdır.",
          },
          {
            id: "u19_t3_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "He ______ (hear) the news yet. He's been in the forest without his phone.",
            options: [
              "can't have heard",
              "must have heard",
              "should hear",
              "might hear",
            ],
            correct_answer: "can't have heard",
            explanation:
              "Telefonu olmayan birinin haberi duymuş olması imkansızdır.",
          },
          {
            id: "u19_t3_q4",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "I ______ (leave) my wallet at the gym. I'm not entirely sure.",
            correct_answer: "might have left",
            explanation: "Emin olmama durumu.",
          },
          {
            id: "u19_t3_q5",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "The car ______ (repair) because it's still making noises.",
            options: [
              "can't have been repaired",
              "must be repaired",
              "might have repaired",
              "should repair",
            ],
            correct_answer: "can't have been repaired",
            explanation: "Ses çıktığına göre tamir edilmemiş demektir.",
          },
        ],
      },
    ],
  },
  {
    id: 20,
    title: "Bilim ve Etik",
    desc: "2nd & 3rd Conditionals",
    tests: [
      {
        id: "t1",
        title: "Test 2: Varsayımsal Dünyalar (2nd Cond)",
        questions: [
          {
            id: "u20_t1_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "If I ______ (be) you, I would think twice before signing the contract.",
            options: ["am", "was", "were", "been"],
            correct_answer: "were",
            explanation:
              "2nd Conditional tavsiye yapısında 'If I were you' kalıptır.",
          },
          {
            id: "u20_t1_q2",
            type: "ethical_dilemma_conditional",
            difficulty: "hard",
            question_text:
              "If artificial intelligence ______ (become) self-aware tomorrow, how ______ humanity react?",
            options: [
              "becomes / will",
              "became / would",
              "had become / would",
              "becomes / would",
            ],
            correct_answer: "became / would",
            explanation: "Varsayımsal bir gelecek senaryosu (2nd Conditional).",
          },
          {
            id: "u20_t1_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "What would you do if you ______ (find) a 100-dollar bill on the street?",
            correct_answer: "found",
            explanation:
              "Şu anki hayali durumlar için 'find' V2 haliyle kullanılır.",
          },
          {
            id: "u20_t1_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "If everyone ______ (speak) the same language, would there be fewer wars?",
            options: ["speaks", "spoke", "has spoken", "will speak"],
            correct_answer: "spoke",
            explanation: "Gerçeğe aykırı varsayım.",
          },
          {
            id: "u20_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "I ______ (travel) the world if I were a billionaire.",
            correct_answer: "would travel",
            explanation: "Sonuç kısmı would + V1 ile kurulur.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Geçmiş Pişmanlıklar (3rd Cond)",
        questions: [
          {
            id: "u20_t2_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "If we ______ (listen) to the warning, we wouldn't have lost all our data.",
            options: ["listened", "had listened", "would listen", "listen"],
            correct_answer: "had listened",
            explanation:
              "Geçmişteki bir hatanın alternatif sonucu (3rd Conditional: If + Past Perfect).",
          },
          {
            id: "u20_t2_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "If the scientist ______ (not / discover) the cure, many more people would have died.",
            correct_answer: "had not discovered",
            explanation: "Geçmişteki bir olayın 'olumsuz' şartı.",
          },
          {
            id: "u20_t2_q3",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "She ______ (pass) the exam if she had studied more.",
            options: ["would pass", "passes", "would have passed", "passed"],
            correct_answer: "would have passed",
            explanation:
              "Geçmişteki sonucun gerçekleşmediğini belirtir (would have + V3).",
          },
          {
            id: "u20_t2_q4",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "If I ______ (know) you were coming, I would have baked a cake.",
            correct_answer: "had known",
            explanation: "Bilseydim (geçmiş) yapardım.",
          },
          {
            id: "u20_t2_q5",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "3rd Conditional yapısı hangi tür durumlar için kullanılır?",
            options: [
              "Genel gerçekler",
              "Gelecekteki ihtimaller",
              "Geçmişteki hayali durumlar (pişmanlıklar)",
              "Şimdiki rutinler",
            ],
            correct_answer: "Geçmişteki hayali durumlar (pişmanlıklar)",
            explanation: "Olan bir şeyin aksini geçmiş için hayal etmek.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Karma Koşullar",
        questions: [
          {
            id: "u20_t3_q1",
            type: "ethical_dilemma_conditional",
            difficulty: "expert",
            question_text:
              "If you ______ (have) to choose between saving one friend or five strangers, what ______ you do?",
            options: [
              "have / will",
              "had / would",
              "had had / would",
              "have / would",
            ],
            correct_answer: "had / would",
            explanation: "Etik ikilem (2nd Conditional).",
          },
          {
            id: "u20_t3_q2",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "If I ______ (not / miss) the train yesterday, I ______ (not / be) so tired now.",
            options: [
              "hadn't missed / wouldn't be",
              "didn't miss / wouldn't be",
              "hadn't missed / wouldn't have been",
              "don't miss / am not",
            ],
            correct_answer: "hadn't missed / wouldn't be",
            explanation:
              "Mixed Conditional: Geçmişteki eylem (hadn't missed) + şimdiki sonuç (wouldn't be).",
          },
          {
            id: "u20_t3_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "If humans ______ (can) fly, the world would be very different.",
            correct_answer: "could",
            explanation: "Can'in Past hali kullanılır.",
          },
          {
            id: "u20_t3_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text: "Hangi cümle 'Benim hatamdı' anlamı verir?",
            options: [
              "If I studied, I would pass.",
              "If I had studied, I would have passed.",
              "If I study, I will pass.",
              "I study and I pass.",
            ],
            correct_answer: "If I had studied, I would have passed.",
            explanation:
              "Geçmişteki başarısızlığın sorumluluğunu (pişmanlığını) ifade eder.",
          },
          {
            id: "u20_t3_q5",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text: "Had I known about the party, I ______ (come).",
            correct_answer: "would have come",
            explanation: "Inversion (If I had known = Had I known) yapısı.",
          },
        ],
      },
    ],
  },
  {
    id: 21,
    title: "Medya & Manipülasyon",
    desc: "Reported Speech (Dolaylı Anlatım)",
    tests: [
      {
        id: "t1",
        title: "Test 1: Alıntılar ve Raporlama",
        questions: [
          {
            id: "u21_t1_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "The journalist said that the government ______ (hide) the truth from the public.",
            options: ["is hiding", "was hiding", "hides", "will hide"],
            correct_answer: "was hiding",
            explanation:
              "Aktarılan cümle (tense shift) bir derece geçmişe gider (Present Cont -> Past Cont).",
          },
          {
            id: "u21_t1_q2",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "She told me that she ______ (see) the suspect at the scene.",
            correct_answer: "had seen",
            explanation: "Past Simple aktarılırken Past Perfect olur.",
          },
          {
            id: "u21_t1_q3",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "He asked me where ______ (I / work) the previous year.",
            options: [
              "worked I",
              "did I work",
              "I had worked",
              "I was working",
            ],
            correct_answer: "I had worked",
            explanation:
              "Sorular aktarılırken soru yapısı düşer ve düz cümle sırasına (özne + fiil) döner.",
          },
          {
            id: "u21_t1_q4",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "'I'll call you tomorrow.' -> He said he would call me ______.",
            correct_answer: "the next day",
            explanation:
              "Zarflar da değişir: tomorrow -> the next day / the following day.",
          },
          {
            id: "u21_t1_q5",
            type: "multiple_choice",
            difficulty: "easy",
            question_text: "'Say' ve 'Tell' arasındaki fark nedir?",
            options: [
              "Say'den sonra nesne (me, him) gelmez, Tell'den sonra gelir.",
              "Say geçmişte, Tell gelecekte kullanılır.",
              "Hiç fark yoktur.",
              "Say sadece sorularda kullanılır.",
            ],
            correct_answer:
              "Say'den sonra nesne (me, him) gelmez, Tell'den sonra gelir.",
            explanation: "She said... / She told ME...",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Haber Kaynakları",
        questions: [
          {
            id: "u21_t2_q1",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "The editor ordered the writer ______ (check) the sources again.",
            options: ["checking", "to check", "check", "that check"],
            correct_answer: "to check",
            explanation:
              "Emir (Order) ve ricalar Infinitive yapısıyla aktarılır.",
          },
          {
            id: "u21_t2_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "The scientist claimed that the experiment ______ (be) a success.",
            correct_answer: "had been",
            explanation: "Claim (iddia) aktarımı.",
          },
          {
            id: "u21_t2_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "'Can' aktarılırken hangi modal'a dönüşür?",
            options: ["Could", "Can't", "Would", "Should"],
            correct_answer: "Could",
            explanation: "Can -> Could.",
          },
          {
            id: "u21_t2_q4",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "'I am busy here.' -> She said that she was busy ______.",
            correct_answer: "there",
            explanation: "Yer zarfı değişir: here -> there.",
          },
          {
            id: "u21_t2_q5",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Aktarılan bir soruda hangisi ASLA bulunmaz?",
            options: ["If", "Whether", "Did / Does", "Özne"],
            correct_answer: "Did / Does",
            explanation:
              "Yardımcı fiiller soru yapısını kaybederek cümleden çıkar.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Karma Haberler",
        questions: [
          {
            id: "u21_t3_q1",
            type: "multiple_choice",
            difficulty: "expert",
            question_text:
              "The witness denied ______ (see) anything at the crime scene.",
            options: ["to see", "seeing", "she saw", "that she saw"],
            correct_answer: "seeing",
            explanation:
              "Deny, suggest gibi fiiller Reported Speech dolaylı aktarımında Gerund ile de kullanılabilir.",
          },
          {
            id: "u21_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "'Don't touch it!' -> The officer warned us ______ (not / touch) it.",
            correct_answer: "not to touch",
            explanation: "Olumsuz emir aktarımı: not + to + V1.",
          },
          {
            id: "u21_t3_q3",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "She asked if I ______ (know) the way to the airport.",
            options: ["know", "did know", "knew", "had known"],
            correct_answer: "knew",
            explanation: "Yes/No soruları 'if/whether' ile aktarılır.",
          },
          {
            id: "u21_t3_q4",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "'I have already finished.' -> He said he ______ (already / finish).",
            correct_answer: "had already finished",
            explanation: "Present Perfect -> Past Perfect.",
          },
          {
            id: "u21_t3_q5",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Aktarma fiili 'Says' (Geniş zaman) ise içerideki zaman değişir mi?",
            options: ["Evet", "Hayır", "Sadece gelecekte", "Sadece sorularda"],
            correct_answer: "Hayır",
            explanation:
              "Raporlama fiili (says, claims) geniş zamandaysa içerideki zaman kaydırılmaz.",
          },
        ],
      },
    ],
  },
  {
    id: 22,
    title: "Ekonomi & Kariyer",
    desc: "Mixed Conditionals",
    tests: [
      {
        id: "t1",
        title: "Test 1: Geçmiş ve Bugün Bağlantısı",
        questions: [
          {
            id: "u22_t1_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "If I ______ (invest) in Bitcoin in 2010, I ______ (be) a millionaire now.",
            options: [
              "invested / would be",
              "had invested / would be",
              "had invested / would have been",
              "invested / am",
            ],
            correct_answer: "had invested / would be",
            explanation:
              "Geçmişteki eylem (had invested) + şimdiki sonuç (would be).",
          },
          {
            id: "u22_t1_q2",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "If he ______ (speak) Japanese, he ______ (get) the job last year.",
            options: [
              "speaks / would get",
              "spoke / would have gotten",
              "had spoken / would have gotten",
              "speaks / got",
            ],
            correct_answer: "spoke / would have gotten",
            explanation:
              "Genel bir yetenek (spoke) + geçmişteki sonuç (would have gotten).",
          },
          {
            id: "u22_t1_q3",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "If you ______ (not / forget) the tickets at home, we wouldn't be waiting in this line now.",
            correct_answer: "hadn't forgotten",
            explanation:
              "Geçmişteki hata (forget) ve şimdiki yansıma (waiting).",
          },
          {
            id: "u22_t1_q4",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "If she ______ (be) more careful, she wouldn't have made so many mistakes.",
            options: ["is", "was", "were", "had been"],
            correct_answer: "were",
            explanation:
              "Her zamanki karakteri (were: dikkatli biri olsaydı) geçmişteki hatayı etkilerdi.",
          },
          {
            id: "u22_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "If I ______ (have) a car, I would have given you a lift yesterday.",
            correct_answer: "had",
            explanation: "Arabam (şu an/genel) olsaydı dün bırakırdım.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Kararlar ve Sonuçlar",
        questions: [
          {
            id: "u22_t2_q1",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "We wouldn't be lost if we ______ (take) the map with us.",
            options: ["took", "had taken", "would take", "have taken"],
            correct_answer: "had taken",
            explanation:
              "Şu an kaybolmazdık (sonuç) eğer haritayı almış olsaydık (geçmiş eylem).",
          },
          {
            id: "u22_t2_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "If they ______ (not / waste) all their money, they would be rich today.",
            correct_answer: "hadn't wasted",
            explanation: "Geçmişteki israf, bugünkü fakirlik.",
          },
          {
            id: "u22_t2_q3",
            type: "multiple_choice",
            difficulty: "expert",
            question_text:
              "If I ______ (listen) to my parents' advice, I ______ (have) a better career now.",
            options: [
              "listened / had",
              "had listened / would have",
              "listened / would have",
              "had listened / had",
            ],
            correct_answer: "had listened / would have",
            explanation: "Geçmişteki dinleme eylemi + şimdiki kariyer durumu.",
          },
          {
            id: "u22_t2_q4",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "If she ______ (love) him, she would have married him a long time ago.",
            correct_answer: "loved",
            explanation: "Ona (hala) karşı sevgisi olsaydı eskiden evlenirdi.",
          },
          {
            id: "u22_t2_q5",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Mixed Conditional hangi iki zamanı birleştirir?",
            options: [
              "Present & Future",
              "Past & Future",
              "Past & Present",
              "Present & Always",
            ],
            correct_answer: "Past & Present",
            explanation: "Geçmişteki eylemin şimdiki etkisi veya tam tersi.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: İş Hayatı Senaryoları",
        questions: [
          {
            id: "u22_t3_q1",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "If the company ______ (go) bankrupt last year, I would be looking for a job now.",
            options: ["went", "had gone", "was going", "goes"],
            correct_answer: "had gone",
            explanation: "Geçmişteki iflas + şimdiki iş arama.",
          },
          {
            id: "u22_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "If you ______ (be) better at managing money, you wouldn't have spent all your savings.",
            correct_answer: "were",
            explanation: "Genel yetenek (be) + geçmişteki eylem (spent).",
          },
          {
            id: "u22_t3_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "If I ______ (not / miss) the flight, I ______ (be) in Paris right now.",
            options: [
              "didn't miss / would be",
              "hadn't missed / would be",
              "hadn't missed / would have been",
              "didn't miss / would have been",
            ],
            correct_answer: "hadn't missed / would be",
            explanation: "Kaçırma (geçmiş) + bulunma (şu an).",
          },
          {
            id: "u22_t3_q4",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "Had they ______ (work) harder, they would be successful now.",
            correct_answer: "worked",
            explanation: "Inversion (Had + S + V3) yapısı.",
          },
          {
            id: "u22_t3_q5",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Mixed Conditional cümlesini bulun:",
            options: [
              "If he eats, he is full.",
              "If he goes, I will go.",
              "If he had trained, he would be a champion now.",
              "If he trained, he would win.",
            ],
            correct_answer: "If he had trained, he would be a champion now.",
            explanation: "Zamanlar arası geçiş yapan tek seçenektir.",
          },
        ],
      },
    ],
  },
  {
    id: 23,
    title: "Akademik Yazım",
    desc: "Inversion & Emphasis (Retorik)",
    tests: [
      {
        id: "t1",
        title: "Test 1: Vurgulu Anlatım",
        questions: [
          {
            id: "u23_t1_q1",
            type: "rhetorical_reformulation",
            difficulty: "expert",
            question_text:
              "Rewrite 'I have never seen such a lack of ethics' starting with 'Never'.",
            options: [
              "Never I have seen such a lack of ethics...",
              "Never have I seen such a lack of ethics...",
              "Never saw I...",
              "Never did I seen...",
            ],
            correct_answer: "Never have I seen such a lack of ethics...",
            explanation:
              "Negatif zarf (Never) başa gelince devrik cümle (Inversion) kurulur.",
          },
          {
            id: "u23_t1_q2",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Not only ______ (he / be) talented, but he is also hardworking.",
            options: ["he is", "is he", "does he", "was he"],
            correct_answer: "is he",
            explanation: "'Not only' ile başlayan cümle devrik olur.",
          },
          {
            id: "u23_t1_q3",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "Seldom ______ (we / experience) such extreme weather in this region.",
            correct_answer: "do we experience",
            explanation: "Seldom (nadiren) devriklik yaratır.",
          },
          {
            id: "u23_t1_q4",
            type: "multiple_choice",
            difficulty: "expert",
            question_text:
              "Little ______ (she / know) that the surprise was waiting for her.",
            options: ["she knew", "did she know", "did she knew", "knew she"],
            correct_answer: "did she know",
            explanation: "Little (hiç/pek az) devriklik yaratır.",
          },
          {
            id: "u23_t1_q5",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "Only then ______ (I / realize) the mistake I had made.",
            correct_answer: "did I realize",
            explanation: "'Only then' zaman zarfı devriklik gerektirir.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Akademik Formatta Cümle Kurma",
        questions: [
          {
            id: "u23_t2_q1",
            type: "rhetorical_reformulation",
            difficulty: "hard",
            question_text:
              "Hangi cümle daha VURGULU (Academic/Emphatic) durur?",
            options: [
              "The rain started as soon as we left.",
              "No sooner had we left than the rain started.",
              "We left and then it rained.",
              "Hardly we left when it rained.",
            ],
            correct_answer: "No sooner had we left than the rain started.",
            explanation:
              "'No sooner... than' kalıbı inversion ile daha retorik bir hava verir.",
          },
          {
            id: "u23_t2_q2",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "Under no circumstances ______ (you / should) reveal your password.",
            correct_answer: "should you",
            explanation: "'Under no circumstances' (asla) yapısı devriktir.",
          },
          {
            id: "u23_t2_q3",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Scarcely ______ (the sun / set) when the stars appeared.",
            options: [
              "had the sun set",
              "the sun sets",
              "did the sun set",
              "was the sun setting",
            ],
            correct_answer: "had the sun set",
            explanation:
              "'Scarcely... when' kalıbı Past Perfect ve Inversion ile kullanılır.",
          },
          {
            id: "u23_t2_q4",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text: "Rarely ______ (she / go) to the cinema anymore.",
            correct_answer: "does she go",
            explanation: "Geniş zaman devrik yapı.",
          },
          {
            id: "u23_t2_q5",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Inversion (Devrik yapı) ne zaman kullanılır?",
            options: [
              "Sadece sorularda",
              "Sadece gelecekte",
              "Vurgu yapmak için veya negatif bir zarfla cümle başladığında",
              "Sadece kısa cevaplarda",
            ],
            correct_answer:
              "Vurgu yapmak için veya negatif bir zarfla cümle başladığında",
            explanation: "Akademik ve edebi anlatımda vurgu aracıdır.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Karma Akademik Yapılar",
        questions: [
          {
            id: "u23_t3_q1",
            type: "rhetorical_reformulation",
            difficulty: "expert",
            question_text:
              "I didn't notice the fire until much later. -> Not until much later ______ I notice the fire.",
            options: ["I did", "did", "was", "not"],
            correct_answer: "did",
            explanation:
              "'Not until' ile başlayan yapıda inversion ana cümlede (notice tarafında) olur.",
          },
          {
            id: "u23_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "So beautiful ______ (be) the view that we couldn't look away.",
            correct_answer: "was / is",
            explanation: "So + Sıfat... that yapısı devrik olabilir.",
          },
          {
            id: "u23_t3_q3",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Hangi kelime 'Only' ile başladığında ikinci cümlede devriklik İSTEMEZ?",
            options: [
              "Only when",
              "Only after",
              "Only if",
              "Soru kelimesiz Only",
            ],
            correct_answer: "Soru kelimesiz Only",
            explanation:
              "Only + Zaman bağlacı olan durumlarda devriklik ana cümlede olur.",
          },
          {
            id: "u23_t3_q4",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "Had I ______ (know) the truth, I wouldn't have said that.",
            correct_answer: "known",
            explanation: "Inversion (If I had known).",
          },
          {
            id: "u23_t3_q5",
            type: "multiple_choice",
            difficulty: "expert",
            question_text: "Rewrite: 'We little suspected that he was a spy.'",
            options: [
              "Little did we suspect...",
              "Suspect we little...",
              "We little had suspected...",
              "Little had we suspect...",
            ],
            correct_answer: "Little did we suspect...",
            explanation:
              "Little (zarf) başa gelir, Simple Past devriktir (did we suspect).",
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
