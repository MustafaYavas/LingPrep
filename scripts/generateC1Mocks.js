import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unitsData = [
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
          {
            id: "u24_t1_q2",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "He ______ (know) the consequences, yet he proceeded without a moment's hesitation.",
            options: [
              "must have known",
              "ought know",
              "would know",
              "can have known",
            ],
            correct_answer: "must have known",
            explanation: "Güçlü bir kesinlik ve mantıksal zorunluluk çıkarımı.",
          },
          {
            id: "u24_t1_q3",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "Had he arrived earlier, the outcome ______ (be) different.",
            correct_answer: "might have been",
            explanation: "Geçmişe dair varsayımsal ihtimal.",
          },
          {
            id: "u24_t1_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "I ______ (leave) my keys at the office, although I'm convinced I had them in the car.",
            options: [
              "could have left",
              "must have left",
              "needn't have left",
              "should have left",
            ],
            correct_answer: "could have left",
            explanation: "Zayıf ama olası bir ihtimali ifade eder.",
          },
          {
            id: "u24_t1_q5",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "You ______ (not / speak) to him so harshly. He was already under a lot of stress.",
            correct_answer: "shouldn't have spoken",
            explanation: "Geçmişe dair pişmanlık/eleştiri nüansı.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: İhtimal ve Nüans",
        questions: [
          {
            id: "u24_t2_q1",
            type: "nuance_differentiation",
            difficulty: "expert",
            question_text:
              "The manuscript ______ (be) lost during the fire, but there is a slim chance it was stolen beforehand.",
            options: [
              "must have been",
              "might have been",
              "should have been",
              "couldn't have been",
            ],
            correct_answer: "might have been",
            explanation:
              "Belirsizlik ve düşük ihtimal durumlarında 'might' nüansı kullanılır.",
          },
          {
            id: "u24_t2_q2",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "They ______ (arrive) by now, unless they were delayed by the storm.",
            options: [
              "should have arrived",
              "must arrive",
              "can have arrived",
              "would arrive",
            ],
            correct_answer: "should have arrived",
            explanation: "Beklenti ve mantıklı varsayım.",
          },
          {
            id: "u24_t2_q3",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "He needn't ______ (worry) about the results; he passed with flying colors.",
            correct_answer: "have worried",
            explanation: "Gereksiz yere yapılmış bir eylemi belirtir.",
          },
          {
            id: "u24_t2_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "A: The lights are on. B: Someone ______ (forget) to turn them off.",
            options: [
              "must have forgotten",
              "might forget",
              "could forget",
              "should have forgotten",
            ],
            correct_answer: "must have forgotten",
            explanation: "Görünen kanıta dayalı güçlü çıkarım.",
          },
          {
            id: "u24_t2_q5",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "How ______ she ______ (know) the truth if nobody told her?",
            correct_answer: "could / have known",
            explanation: "İmkansızlık/hayret bildiren soru yapısı.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Varlık ve Anlam",
        questions: [
          {
            id: "u24_t3_q1",
            type: "multiple_choice",
            difficulty: "expert",
            question_text: "It was a mistake. We ______ (act) so impulsively.",
            options: [
              "ought not to have acted",
              "must not have acted",
              "could not have acted",
              "might not have acted",
            ],
            correct_answer: "ought not to have acted",
            explanation:
              "Pişmanlık ve ahlaki eleştiri için 'ought not to have' sofistike bir tercihtir.",
          },
          {
            id: "u24_t3_q2",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "The suspect ______ (not / be) at the scene; there are video records of him at home.",
            correct_answer: "can't have been",
            explanation: "Geçmişe dair kesin imkansızlık.",
          },
          {
            id: "u24_t3_q3",
            type: "nuance_differentiation",
            difficulty: "expert",
            question_text:
              "Hangi modal 'Geçmişte yapılması gerekip de yapılmayan' bir eylem için kullanılır?",
            options: ["Should have", "Must have", "May have", "Can have"],
            correct_answer: "Should have",
            explanation: "Beklenti veya görev ihlali.",
          },
          {
            id: "u24_t3_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "He ______ (try) much harder if he had really wanted the award.",
            options: [
              "would have tried",
              "could have tried",
              "must have tried",
              "should have tried",
            ],
            correct_answer: "would have tried",
            explanation: "Geçmiş hayali durum (3rd Conditional nüansı).",
          },
          {
            id: "u24_t3_q5",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "It may ______ (rain) while we were inside, the streets are quite damp.",
            correct_answer: "have rained",
            explanation: "Belki yağmıştır (ihtimal).",
          },
        ],
      },
    ],
  },
  {
    id: 25,
    title: "Kültürel Kimlik",
    desc: "Cleft Sentences & Focusing Techniques",
    tests: [
      {
        id: "t1",
        title: "Test 1: Odak Kaydırma",
        questions: [
          {
            id: "u25_t1_q1",
            type: "rhetorical_refining",
            difficulty: "expert",
            question_text:
              "Transform: 'Traditional music defines a nation's identity, not its borders.' into a Cleft Sentence emphasizing 'music'.",
            options: [
              "It is music that defines a nation's identity...",
              "Music is what defines a nation's identity...",
              "What defines identity is music...",
              "It was music which defined identity...",
            ],
            correct_answer: "It is music that defines a nation's identity...",
            explanation:
              "vurgulanmak istenen öge 'It is... that' arasına alınır.",
          },
          {
            id: "u25_t1_q2",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "What I need ______ (be) a long holiday away from technology.",
            options: ["is", "are", "was", "be"],
            correct_answer: "is",
            explanation:
              "Pseudo-cleft sentence yapısı 'What-clause' ile kurulur.",
          },
          {
            id: "u25_t1_q3",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "It was ______ 1980 that the law was finally changed.",
            correct_answer: "in",
            explanation: "Zaman vurgulu Cleft yapısında edat kullanımı.",
          },
          {
            id: "u25_t1_q4",
            type: "rhetorical_refining",
            difficulty: "expert",
            question_text:
              "Rewrite 'I love the culture of Japan' using a 'What' cleft structure.",
            options: [
              "What I love is the culture of Japan.",
              "It is the culture of Japan that I love.",
              "The culture of Japan is what I love.",
              "All of the above",
            ],
            correct_answer: "What I love is the culture of Japan.",
            explanation:
              "'What' ile başlayan yapı nesneyi vurgulamak için kullanılır.",
          },
          {
            id: "u25_t1_q5",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text: "All I want ______ (be) for you to listen.",
            correct_answer: "is",
            explanation: "'All' ile başlayan Cleft yapısı tekillik bildirir.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Antropolojik Vurgular",
        questions: [
          {
            id: "u25_t2_q1",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Hangi cümle 'Benim hatamdı' vurgusu yapar? (Cleft structure)",
            options: [
              "I made the mistake.",
              "It was I who made the mistake.",
              "The mistake was mine.",
              "The mistake was made by me.",
            ],
            correct_answer: "It was I who made the mistake.",
            explanation: "Özneyi vurgulayan en sofistike Cleft yapısı budur.",
          },
          {
            id: "u25_t2_q2",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text: "______ happened was that the car ran out of fuel.",
            correct_answer: "What",
            explanation:
              "Olayı vurgulamak için 'What happened' kalıbı kullanılır.",
          },
          {
            id: "u25_t2_q3",
            type: "rhetorical_refining",
            difficulty: "expert",
            question_text:
              "Rewrite 'She values honesty above all' using 'It is...'",
            options: [
              "It is honesty that she values above all.",
              "Honesty is what she values.",
              "What she values is honesty.",
              "Valuing honesty is what she does.",
            ],
            correct_answer: "It is honesty that she values above all.",
            explanation: "Soyut kavram vurgusu.",
          },
          {
            id: "u25_t2_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "The person ______ told me about the ritual was a local elder.",
            options: ["who", "which", "that", "whom"],
            correct_answer: "who",
            explanation: "Cleft yapıda insan nitelemesi.",
          },
          {
            id: "u25_t2_q5",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "It wasn't until midnight ______ we finally arrived.",
            correct_answer: "that",
            explanation:
              "'It wasn't until... that' zaman kısıtlı vurgu kalıbıdır.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Karma Fokus",
        questions: [
          {
            id: "u25_t3_q1",
            type: "multiple_choice",
            difficulty: "expert",
            question_text:
              "The reason ______ I left was the lack of cultural respect.",
            options: ["why", "that", "which", "how"],
            correct_answer: "why",
            explanation: "Neden vurgulu cümle yapısı.",
          },
          {
            id: "u25_t3_q2",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "It ______ precisely because of her heritage that she chose this path.",
            correct_answer: "was",
            explanation: "Sebep vurgulu geçmiş zaman Cleft.",
          },
          {
            id: "u25_t3_q3",
            type: "rhetorical_refining",
            difficulty: "expert",
            question_text: "Hangi yapı bir eylemi (verb) vurgulayabilir?",
            options: [
              "What she did was (to) leave.",
              "It was leaving she did.",
              "She did leave.",
              "Both A and C",
            ],
            correct_answer: "Both A and C",
            explanation:
              "Cleft (What she did) ve Emphatic Do (She did leave) vurgu sağlar.",
          },
          {
            id: "u25_t3_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text: "Is it ______ you are looking for?",
            options: ["this", "that", "it", "which"],
            correct_answer: "this",
            explanation: "İşaret vurgulu soru.",
          },
          {
            id: "u25_t3_q5",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "The thing ______ surprises me most is his tolerance.",
            correct_answer: "that",
            explanation: "Nesne niteleme cleft.",
          },
        ],
      },
    ],
  },
  {
    id: 26,
    title: "YZ ve Gelecek Etik",
    desc: "Future in the Past",
    tests: [
      {
        id: "t1",
        title: "Test 1: Öngörüler ve Analiz",
        questions: [
          {
            id: "u26_t1_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "In 1990, scientists believed that AI ______ (be) a reality by the year 2000.",
            options: ["will be", "would be", "is going to be", "had been"],
            correct_answer: "would be",
            explanation:
              "Geçmişteki bir noktadan geleceğe bakarken 'will' yerine 'would' kullanılır.",
          },
          {
            id: "u26_t1_q2",
            type: "multiple_choice",
            difficulty: "hard",
            question_text: "I ______ (call) you, but my battery died.",
            options: [
              "was going to call",
              "would call",
              "am going to call",
              "called",
            ],
            correct_answer: "was going to call",
            explanation: "Niyet edilen ama gerçekleşmeyen geçmiş eylem.",
          },
          {
            id: "u26_t1_q3",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "They ______ (about to) start the meeting when the power went out.",
            correct_answer: "were about to",
            explanation: "Olmak üzereyken kesilen geçmiş eylem.",
          },
          {
            id: "u26_t1_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "The robot ______ (become) a threat, or so the experts feared back then.",
            options: [
              "was to become",
              "would have become",
              "is becoming",
              "became",
            ],
            correct_answer: "was to become",
            explanation:
              "Geçmişteki kaçınılmazlık/kader nüansı (was/were to + V1).",
          },
          {
            id: "u26_t1_q5",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "Little did he know that his invention ______ (change) the world forever.",
            correct_answer: "would change",
            explanation: "Henüz bilinmeyen gelecek (Future in the Past).",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Teknoloji ve Beklentiler",
        questions: [
          {
            id: "u26_t2_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "She ______ (leave) for Tokyo the next day, so she packed her bags quickly.",
            options: ["is leaving", "was leaving", "will leave", "leaves"],
            correct_answer: "was leaving",
            explanation:
              "Önceden planlanmış geçmiş gelecek (Past Cont used as Future).",
          },
          {
            id: "u26_t2_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "I ______ (due to) give a speech, but I lost my voice.",
            correct_answer: "was due to",
            explanation: "Resmi programlanmış ama yapılamayan eylem.",
          },
          {
            id: "u26_t2_q3",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "At the time, we ______ (not / know) that the system ______ (crash) so soon.",
            options: [
              "didn't know / will crash",
              "didn't know / would crash",
              "haven't known / crashes",
              "hadn't known / crashed",
            ],
            correct_answer: "didn't know / would crash",
            explanation: "Geçmişteki bilgi eksikliği.",
          },
          {
            id: "u26_t2_q4",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "The experiment ______ (take) five years to complete, according to the original plan.",
            correct_answer: "was to take",
            explanation: "Planlanan süreç.",
          },
          {
            id: "u26_t2_q5",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Hangi yapı 'En yakın gelecek (neredeyse o an)' anlamı verir?",
            options: ["Was going to", "Was about to", "Would", "Was to"],
            correct_answer: "Was about to",
            explanation: "Hemen gerçekleşmek üzere olan eylem.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Etik Senaryolar",
        questions: [
          {
            id: "u26_t3_q1",
            type: "philosophical_prompting",
            difficulty: "expert",
            question_text:
              "The company ______ (be) the first to launch, but ethics boards intervened.",
            options: [
              "could have been",
              "was going to be",
              "should be",
              "would have been",
            ],
            correct_answer: "was going to be",
            explanation: "Planlanan niyet vurgusu.",
          },
          {
            id: "u26_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "He ______ (intend) to resign, but he changed his mind after the promotion.",
            correct_answer: "had intended",
            explanation: "Daha önceki niyet (Past Perfect).",
          },
          {
            id: "u26_t3_q3",
            type: "multiple_choice",
            difficulty: "expert",
            question_text:
              "Had they known the risks, ______ (they / still / proceed)?",
            options: [
              "would they still proceed",
              "would they still have proceeded",
              "should they proceed",
              "will they proceed",
            ],
            correct_answer: "would they still have proceeded",
            explanation: "Geçmişe dair varsayımsal gelecek-sonuç.",
          },
          {
            id: "u26_t3_q4",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "The law ______ (not / come) into effect until the following year.",
            correct_answer: "was not to come",
            explanation: "Geçmişteki resmi takvim/kader.",
          },
          {
            id: "u26_t3_q5",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "'Would' hangi durumda kullanılmaz?",
            options: [
              "Niyet",
              "Geçmiş rutin",
              "Geçmişten bakılan gelecek",
              "Şu anki kesin gerçek",
            ],
            correct_answer: "Şu anki kesin gerçek",
            explanation: "Would varsayımsal veya geçmiş odaklıdır.",
          },
        ],
      },
    ],
  },
  {
    id: 27,
    title: "Hukuk ve Retorik",
    desc: "Nominal Clauses (Noun Clauses)",
    tests: [
      {
        id: "t1",
        title: "Test 1: Karmaşık Fikirleri Özetleme",
        questions: [
          {
            id: "u27_t1_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "______ he said was completely irrelevant to the case.",
            options: ["What", "That", "Which", "How"],
            correct_answer: "What",
            explanation:
              "'What' ile başlayan isim cümleciği cümlenin öznesidir.",
          },
          {
            id: "u27_t1_q2",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "The judge noted ______ the evidence had been tampered with.",
            options: ["what", "that", "how", "whether"],
            correct_answer: "that",
            explanation: "Nesne konumunda 'that-clause' kullanımı.",
          },
          {
            id: "u27_t1_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "I am concerned about ______ you are going to pay the fine.",
            correct_answer: "how",
            explanation: "Yöntem bildiren isim cümleciği.",
          },
          {
            id: "u27_t1_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text: "______ the defendant is guilty remains to be seen.",
            options: ["Whether", "If", "What", "That"],
            correct_answer: "Whether",
            explanation:
              "Cümle başında 'olup olmadığı' anlamı için 'Whether' tercih edilir.",
          },
          {
            id: "u27_t1_q5",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "Whoever ______ (find) the lost documents should contact the clerk.",
            correct_answer: "finds",
            explanation: "Generic pronoun 'whoever' tekil kabul edilir.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Politik ve Hukuksal Söylemler",
        questions: [
          {
            id: "u27_t2_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "We discussed ______ or not we should appeal the decision.",
            options: ["if", "whether", "how", "that"],
            correct_answer: "whether",
            explanation: "'Or not' ile birlikte 'whether' kullanılır.",
          },
          {
            id: "u27_t2_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "The fact ______ he lied under oath destroyed his credibility.",
            correct_answer: "that",
            explanation: "Açıklayıcı 'fact that' kalıbı.",
          },
          {
            id: "u27_t2_q3",
            type: "multiple_choice",
            difficulty: "expert",
            question_text:
              "It is essential ______ the witness ______ (tell) the truth.",
            options: [
              "that / tell",
              "what / tells",
              "that / to tell",
              "how / tell",
            ],
            correct_answer: "that / tell",
            explanation:
              "Subjunctive gerektiren Noun Clause (Essential that...).",
          },
          {
            id: "u27_t2_q4",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text: "Whatever ______ (happen), we must stay calm.",
            correct_answer: "happens",
            explanation: "İsim cümleciğinde 'whatever' kullanımı.",
          },
          {
            id: "u27_t2_q5",
            type: "multiple_choice",
            difficulty: "hard",
            question_text: "I wonder ______ she will testify against him.",
            options: ["if", "that", "what", "which"],
            correct_answer: "if",
            explanation: "İç cümlelerde 'if' kullanılabilir.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Retorik Beceri",
        questions: [
          {
            id: "u27_t3_q1",
            type: "multiple_choice",
            difficulty: "expert",
            question_text: "______ (He / steal) the money is a proven fact.",
            options: [
              "That he stole",
              "What he stole",
              "How he stole",
              "Whether he stole",
            ],
            correct_answer: "That he stole",
            explanation: "Cümleyi özne yapan 'That' kullanımı.",
          },
          {
            id: "u27_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text: "The question is ______ he was aware of the risks.",
            correct_answer: "whether",
            explanation: "Belirsizliği vurgulayan 'is whether' yapısı.",
          },
          {
            id: "u27_t3_q3",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Hangi kelime bir 'Noun Clause' başlatamaz?",
            options: ["Whose", "That", "Which (relative)", "When"],
            correct_answer: "Which (relative)",
            explanation:
              "Relative 'which' sıfat cümleciği kurar, isim cümleciği değil.",
          },
          {
            id: "u27_t3_q4",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "I'll accept ______ (what / which) decision you make.",
            correct_answer: "whatever",
            explanation: "Kapsayıcı nesne.",
          },
          {
            id: "u27_t3_q5",
            type: "multiple_choice",
            difficulty: "expert",
            question_text: "He explained ______ (how / that) the system works.",
            options: ["how", "that", "both", "neither"],
            correct_answer: "both",
            explanation: "Bağlama göre ikisi de nesne cümleciği olabilir.",
          },
        ],
      },
    ],
  },
  {
    id: 28,
    title: "Edebiyat Eleştirisi",
    desc: "Negative Inversion (Dramatic Force)",
    tests: [
      {
        id: "t1",
        title: "Test 1: Dramatik Anlatım",
        questions: [
          {
            id: "u28_t1_q1",
            type: "rhetorical_refining",
            difficulty: "expert",
            question_text:
              "Rewrite 'He had hardly finished his speech when the applause broke out' starting with 'Hardly'.",
            options: [
              "Hardly he had finished...",
              "Hardly had he finished...",
              "Hardly finished he...",
              "Hardly did he finish...",
            ],
            correct_answer: "Hardly had he finished...",
            explanation:
              "'Hardly... when' kalıbı inversion ve Past Perfect ile kurulur.",
          },
          {
            id: "u28_t1_q2",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Under no circumstances ______ (you / should / believe) everything you read in fiction.",
            options: [
              "you should believe",
              "should you believe",
              "should believe you",
              "do you believe",
            ],
            correct_answer: "should you believe",
            explanation: "Negatif ifade başa gelince devriklik olur.",
          },
          {
            id: "u28_t1_q3",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "Scarcely ______ (the sun / set) when the hero appeared.",
            correct_answer: "had the sun set",
            explanation: "Edebi dramatik zamanlama.",
          },
          {
            id: "u28_t1_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Not only ______ (be / she) a great writer, but she was also a brave activist.",
            options: ["she was", "was she", "is she", "has she been"],
            correct_answer: "was she",
            explanation: "'Not only' devrik yapısı.",
          },
          {
            id: "u28_t1_q5",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "Only in this novel ______ (one / find) such complex characters.",
            correct_answer: "can one find",
            explanation: "Kısıtlayıcı yer zarfı + Inversion.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Üslup ve Etki",
        questions: [
          {
            id: "u28_t2_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Rarely ______ (I / read) a more moving story.",
            options: ["I have read", "have I read", "did I read", "I read"],
            correct_answer: "have I read",
            explanation: "Rarely (nadiren) devriklik gerektirir.",
          },
          {
            id: "u28_t2_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "Little ______ (they / realize) the tragedy that was about to unfold.",
            correct_answer: "did they realize",
            explanation: "Little (hiç/pek az) + Past Simple devrik.",
          },
          {
            id: "u28_t2_q3",
            type: "multiple_choice",
            difficulty: "expert",
            question_text:
              "At no time ______ (the author / mention) her true identity.",
            options: [
              "the author mentioned",
              "did the author mention",
              "was the author mentioning",
              "mentioned the author",
            ],
            correct_answer: "did the author mention",
            explanation: "Asla (at no time) devrik yapısı.",
          },
          {
            id: "u28_t2_q4",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "On no account ______ (you / must) skip the preface.",
            correct_answer: "must you",
            explanation: "Kesin yasak vurgusu.",
          },
          {
            id: "u28_t2_q5",
            type: "multiple_choice",
            difficulty: "medium",
            question_text: "Inversion ne tür metinlerde daha yaygındır?",
            options: [
              "Resmi/Edebi metinler",
              "Günlük mesajlar",
              "Spor haberleri",
              "Çizgi filmler",
            ],
            correct_answer: "Resmi/Edebi metinler",
            explanation: "Vurgu ve ritim sağlar.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Edebi Teknikler",
        questions: [
          {
            id: "u28_t3_q1",
            type: "rhetorical_refining",
            difficulty: "expert",
            question_text:
              "Rewrite 'The plot is so intricate that it requires multiple readings.' starting with 'So'.",
            options: [
              "So intricate is the plot that...",
              "So intricate the plot is...",
              "So intricate it is that...",
              "So plot is intricate...",
            ],
            correct_answer: "So intricate is the plot that...",
            explanation: "So + Sıfat... that devrik yapısı.",
          },
          {
            id: "u28_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "Not for one minute ______ (I / think) she was telling the truth.",
            correct_answer: "did I think",
            explanation: "Şüphe vurgusu.",
          },
          {
            id: "u28_t3_q3",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "Never ______ (I / witness) such an emotional performance.",
            options: [
              "have I witnessed",
              "I have witnessed",
              "did I witness",
              "I witnessed",
            ],
            correct_answer: "have I witnessed",
            explanation: "Hayat boyu tecrübe vurgusu.",
          },
          {
            id: "u28_t3_q4",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text: "Only by working together ______ (we / succeed).",
            correct_answer: "can we succeed",
            explanation: "Yöntem vurgulu devriklik.",
          },
          {
            id: "u28_t3_q5",
            type: "multiple_choice",
            difficulty: "expert",
            question_text:
              "No sooner ______ (the curtain / fall) than the audience stood up.",
            options: [
              "had the curtain fallen",
              "the curtain falls",
              "did the curtain fall",
              "fallen the curtain",
            ],
            correct_answer: "had the curtain fallen",
            explanation: "No sooner... than kuralı.",
          },
        ],
      },
    ],
  },
  {
    id: 29,
    title: "Psikoloji ve Rüyalar",
    desc: "Advanced Subjunctive & Hypotheticals",
    tests: [
      {
        id: "t1",
        title: "Test 1: Arzu ve Beklenti",
        questions: [
          {
            id: "u29_t1_q1",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "I suggest that he ______ (be) more careful with his words in the future.",
            options: ["is", "was", "be", "to be"],
            correct_answer: "be",
            explanation:
              "Öneri (suggest) bildiren 'that-clause' içinde Subjunctive (fiilin yalın hali) kullanılır.",
          },
          {
            id: "u29_t1_q2",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "It is essential that everyone ______ (arrive) on time for the therapy session.",
            options: ["arrives", "arrive", "arriving", "to arrive"],
            correct_answer: "arrive",
            explanation: "Zorunluluk (essential) yapısında Subjunctive.",
          },
          {
            id: "u29_t1_q3",
            type: "fill_in_blank",
            difficulty: "medium",
            question_text:
              "I wish I ______ (can / help) you with your dreams, but I am not an expert.",
            correct_answer: "could help",
            explanation: "Şu anki pişmanlık/istek (wish + V2).",
          },
          {
            id: "u29_t1_q4",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "The doctor recommended that she ______ (take) a week off to rest.",
            options: ["takes", "take", "took", "is taking"],
            correct_answer: "take",
            explanation: "Tavsiye (recommend) subjunctive.",
          },
          {
            id: "u29_t1_q5",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "It is high time you ______ (start) taking your health seriously.",
            correct_answer: "started",
            explanation:
              "'It is high time' kalıbından sonra fiil V2 (geçmiş) halinde gelir.",
          },
        ],
      },
      {
        id: "t2",
        title: "Test 2: Varsayımsal Analiz",
        questions: [
          {
            id: "u29_t2_q1",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "She speaks as if she ______ (know) everything about psychology.",
            options: ["knows", "knew", "know", "has known"],
            correct_answer: "knew",
            explanation:
              "'As if / As though' gerçeğe aykırı varsayımda V2 ister.",
          },
          {
            id: "u29_t2_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "If only I ______ (not / say) those things yesterday!",
            correct_answer: "hadn't said",
            explanation: "Geçmiş pişmanlık (If only + Past Perfect).",
          },
          {
            id: "u29_t2_q3",
            type: "multiple_choice",
            difficulty: "expert",
            question_text:
              "I'd rather you ______ (not / tell) anyone about our session.",
            options: [
              "not tell",
              "didn't tell",
              "aren't telling",
              "won't tell",
            ],
            correct_answer: "didn't tell",
            explanation:
              "'I'd rather + Özne' yapısı şimdiki zaman için V2 ister.",
          },
          {
            id: "u29_t2_q4",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text:
              "Suppose you ______ (be) invisible for a day, what would you do?",
            correct_answer: "were",
            explanation: "Varsayım (Suppose).",
          },
          {
            id: "u29_t2_q5",
            type: "multiple_choice",
            difficulty: "medium",
            question_text:
              "Subjunctive Mood (be/take/arrivesiz yapı) neyi ifade eder?",
            options: [
              "Geçmişi",
              "Kesin olanı",
              "Talep, öneri veya zorunluluğu",
              "Sıklık zarflarını",
            ],
            correct_answer: "Talep, öneri veya zorunluluğu",
            explanation: "Fiilin özle/zamanla değişmediği yapı.",
          },
        ],
      },
      {
        id: "t3",
        title: "Test 3: Rüya ve Bilinçaltı",
        questions: [
          {
            id: "u29_t3_q1",
            type: "multiple_choice",
            difficulty: "expert",
            question_text:
              "It is imperative that the patient ______ (not / be) left alone.",
            options: ["is not", "not be", "was not", "not to be"],
            correct_answer: "not be",
            explanation: "Olumsuz Subjunctive: not + V1.",
          },
          {
            id: "u29_t3_q2",
            type: "fill_in_blank",
            difficulty: "hard",
            question_text:
              "If it ______ (not / be) for his help, I would still be struggling.",
            correct_answer: "were not",
            explanation: "2nd Conditional varsayım.",
          },
          {
            id: "u29_t3_q3",
            type: "multiple_choice",
            difficulty: "hard",
            question_text:
              "I wish I ______ (live) in a world where dreams were reality.",
            options: ["live", "lived", "am living", "have lived"],
            correct_answer: "lived",
            explanation: "Şu anki gerçekliğin aksi.",
          },
          {
            id: "u29_t3_q4",
            type: "fill_in_blank",
            difficulty: "expert",
            question_text: "God ______ (save) the King!",
            correct_answer: "save",
            explanation: "Dua/Dilek kalıbı (Subjunctive).",
          },
          {
            id: "u29_t3_q5",
            type: "multiple_choice",
            difficulty: "expert",
            question_text:
              "The board demanded that he ______ (resign) immediately.",
            options: ["resigns", "resigned", "resign", "must resign"],
            correct_answer: "resign",
            explanation: "Talep (demand) subjunctive.",
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
