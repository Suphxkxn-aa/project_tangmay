export interface QuizQuestion {
  id: number;
  thai: string[];
  pos: string;
  level: string;
  choices: string[];
}

export interface CheckAnswerResponse {
  correct: boolean;
  correctAnswer: string;
  acceptedAnswers: string[];
}
