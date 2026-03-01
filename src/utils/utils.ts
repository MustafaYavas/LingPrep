export const units = [
  { id: 1, title: "Merhaba Dünya!", desc: "Tanışma ve Alfabe", level: "A1" },
  { id: 2, title: "Bu Nedir?", desc: 'Eşyalar & "This/That"', level: "A1" },
  { id: 3, title: "Benim Dünyam", desc: "Aile & İyelik Ekleri", level: "A1" },
  {
    id: 4,
    title: "Sıradan Bir Gün",
    desc: "Günlük Rutinler & Geniş Zaman",
    level: "A1",
  },
  { id: 5, title: "Acıktım!", desc: "Yiyecekler & Restoran", level: "A1" },
  {
    id: 6,
    title: "Anılar ve Dün",
    desc: "Past Simple (Was/Were, Did)",
    level: "A2",
  },
  {
    id: 7,
    title: "Hayat Tecrübeleri",
    desc: "Present Perfect (Just, Already)",
    level: "A2",
  },
  {
    id: 8,
    title: "Gelecek Planları",
    desc: "Be Going To & Will, Hedefler",
    level: "A2",
  },
  {
    id: 9,
    title: "Kıyaslamalar",
    desc: "Comparatives & Superlatives",
    level: "A2",
  },
  {
    id: 10,
    title: "Sağlık ve Tavsiyeler",
    desc: "Should, Shouldn't, Must",
    level: "A2",
  },
  {
    id: 11,
    title: "Eğlence ve Hobiler",
    desc: "Adverbs of Manner",
    level: "A2",
  },
  {
    id: 12,
    title: "Modern Yaşam & Teknoloji",
    desc: "Present Continuous vs. Simple",
    level: "B1",
  },
  {
    id: 13,
    title: "Seyahat ve Macera",
    desc: "Past Continuous",
    level: "B1",
  },
  {
    id: 14,
    title: "Hayaller ve İhtimaller",
    desc: "First Conditional (If + Will)",
    level: "B1",
  },
  {
    id: 15,
    title: "Sosyal Sorunlar & Çevre",
    desc: "Passive Voice",
    level: "B1",
  },
  {
    id: 16,
    title: "Film, Müzik ve Sanat",
    desc: "Relative Clauses",
    level: "B1",
  },
  {
    id: 17,
    title: "Deneyimlerin Zirvesi",
    desc: "Present Perfect + Since/For",
    level: "B1",
  },
  {
    id: 18,
    title: "Kişisel Gelişim",
    desc: "Gerunds & Infinitives",
    level: "B2",
  },
  {
    id: 19,
    title: "Suç ve Adalet",
    desc: "Modals of Deduction",
    level: "B2",
  },
  {
    id: 20,
    title: "Bilim ve Etik",
    desc: "2nd & 3rd Conditionals",
    level: "B2",
  },
  {
    id: 21,
    title: "Medya & Manipülasyon",
    desc: "Reported Speech",
    level: "B2",
  },
  {
    id: 22,
    title: "Ekonomi & Kariyer",
    desc: "Mixed Conditionals",
    level: "B2",
  },
  {
    id: 23,
    title: "Akademik Yazım",
    desc: "Inversion & Emphasis",
    level: "B2",
  },
  {
    id: 24,
    title: "Felsefe ve Varoluş",
    desc: "Nuanced Modals",
    level: "C1",
  },
  { id: 25, title: "Kültürel Kimlik", desc: "Cleft Sentences", level: "C1" },
  {
    id: 26,
    title: "YZ ve Gelecek Etik",
    desc: "Future in the Past",
    level: "C1",
  },
  { id: 27, title: "Hukuk ve Retorik", desc: "Nominal Clauses", level: "C1" },
  {
    id: 28,
    title: "Edebiyat Eleştirisi",
    desc: "Negative Inversion",
    level: "C1",
  },
  {
    id: 29,
    title: "Psikoloji ve Rüyalar",
    desc: "Advanced Subjunctive",
    level: "C1",
  },
];

// READING
export const getLevel = (unitId: number) => {
  if (unitId <= 3) return "A1";
  if (unitId <= 6) return "A2";
  if (unitId <= 9) return "B1";
  if (unitId <= 12) return "B2";
  return "C1";
};

export const getLevelBgColor = (unitId: number) => {
  if (unitId <= 3) return "bg-indigo-50";
  if (unitId <= 6) return "bg-orange-50";
  if (unitId <= 9) return "bg-purple-50";
  if (unitId <= 12) return "bg-red-50";
  return "bg-slate-50";
};

export const getLevelBgDarkColor = (unitId: number) => {
  if (unitId <= 3) return "bg-indigo-500";
  if (unitId <= 6) return "bg-orange-500";
  if (unitId <= 9) return "bg-purple-500";
  if (unitId <= 12) return "bg-red-500";
  return "bg-slate-500";
};

export const getLevelBgHoverColor = (unitId: number) => {
  if (unitId <= 3) return "hover:bg-indigo-600";
  if (unitId <= 6) return "hover:bg-orange-600";
  if (unitId <= 9) return "hover:bg-purple-600";
  if (unitId <= 12) return "hover:bg-red-600";
  return "hover:bg-slate-600";
};

export const getLevelTextColor = (unitId: number) => {
  if (unitId <= 3) return "text-indigo-600";
  if (unitId <= 6) return "text-orange-600";
  if (unitId <= 9) return "text-purple-600";
  if (unitId <= 12) return "text-red-600";
  return "text-slate-600";
};

export const getLevelFirstLetterColor = (unitId: number) => {
  if (unitId <= 3) return `first-letter:${getLevelTextColor(unitId)}`;
  if (unitId <= 6) return `first-letter:${getLevelTextColor(unitId)}`;
  if (unitId <= 9) return `first-letter:${getLevelTextColor(unitId)}`;
  if (unitId <= 12) return `first-letter:${getLevelTextColor(unitId)}`;
  return `first-letter:${getLevelTextColor(unitId)}`;
};

// WRITING

export const getWordCountRange = (level: string) => {
  if (level === "A1") return "40-60";
  if (level === "A2") return "80-100";
  if (level === "B1") return "150-180";
  if (level === "B2") return "220-250";
  return "350-400";
};
