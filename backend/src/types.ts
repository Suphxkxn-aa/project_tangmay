export interface WordEntry {
  id: number;
  en: string;
  synonyms: string[];
  thai: string[];
  pos: string;
  level: string;
}

export interface QuizQuestion {
  id: number;
  thai: string[];
  pos: string;
  level: string;
  choices: string[];
}

export interface CheckAnswerBody {
  id: number;
  answer: string;
}
