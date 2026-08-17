export interface WordEntry {
  id: number;
  en: string;
  synonyms: string[];
  thai: string[];
  pos: string;
  level: string;
  category: string;
  image: string;
  hint?: string;
}

export interface QuizQuestion {
  id: number;
  thai: string[];
  pos: string;
  level: string;
  choices: string[];
  category: string;
  image: string;
  hint?: string;
}

export interface CheckAnswerBody {
  id: number;
  answer: string;
}
