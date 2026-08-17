import { Router, Request, Response } from "express";
import words from "../data/words.json";
import { WordEntry, QuizQuestion, CheckAnswerBody } from "../types";

const router = Router();
const wordList = words as WordEntry[];

function toQuestion(w: WordEntry): QuizQuestion {
  return { id: w.id, thai: w.thai, pos: w.pos, level: w.level };
}

function normalize(text: string): string {
  return text.trim().toLowerCase();
}

// GET /api/words/random -> สุ่มคำถามหนึ่งข้อ (ไม่ส่งเฉลยกลับไป)
router.get("/random", (_req: Request, res: Response) => {
  const random = wordList[Math.floor(Math.random() * wordList.length)];
  res.json(toQuestion(random));
});

// GET /api/words -> คำถามทั้งหมด แบบสุ่มลำดับ (เอาไว้ทำโหมดทำทีละชุด)
router.get("/", (req: Request, res: Response) => {
  const level = req.query.level as string | undefined;
  const filtered = level
    ? wordList.filter((w) => w.level.toLowerCase() === level.toLowerCase())
    : wordList;
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  res.json(shuffled.map(toQuestion));
});

// POST /api/words/check -> เช็คคำตอบ { id, answer }
router.post("/check", (req: Request, res: Response) => {
  const { id, answer } = req.body as CheckAnswerBody;

  if (id === undefined || typeof answer !== "string") {
    return res.status(400).json({ error: "ต้องส่ง id และ answer มาด้วย" });
  }

  const word = wordList.find((w) => w.id === id);
  if (!word) {
    return res.status(404).json({ error: "ไม่พบคำศัพท์นี้" });
  }

  const accepted = [word.en, ...word.synonyms].map(normalize);
  const isCorrect = accepted.includes(normalize(answer));

  res.json({
    correct: isCorrect,
    correctAnswer: word.en,
    acceptedAnswers: [word.en, ...word.synonyms],
  });
});

export default router;
