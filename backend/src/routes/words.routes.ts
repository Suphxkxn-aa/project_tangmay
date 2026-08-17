import { Router, Request, Response } from "express";
import { foodWords } from "../data/foodWords";
import { WordEntry, QuizQuestion, CheckAnswerBody } from "../types";

const router = Router();
const wordList: WordEntry[] = foodWords;

function toQuestion(w: WordEntry, pool: WordEntry[]): QuizQuestion {
  const distractors = pool
    .filter((candidate) => candidate.id !== w.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map((candidate) => candidate.en);

  return {
    id: w.id,
    thai: w.thai,
    pos: w.pos,
    level: w.level,
    category: w.category,
    image: w.image,
    choices: [w.en, ...distractors].sort(() => Math.random() - 0.5),
  };
}

function normalize(text: string): string {
  return text.trim().toLowerCase();
}

// GET /api/words/random -> สุ่มคำถามหนึ่งข้อ (ไม่ส่งเฉลยกลับไป)
router.get("/random", (req: Request, res: Response) => {
  const category = req.query.category as string | undefined;
  const pool = category ? wordList.filter((word) => word.category === category) : wordList;
  if (pool.length < 5) return res.status(400).json({ error: "หมวดหมู่นี้มีคำศัพท์ไม่เพียงพอ" });
  const random = pool[Math.floor(Math.random() * pool.length)];
  res.json(toQuestion(random, pool));
});

// GET /api/words -> คำถามทั้งหมด แบบสุ่มลำดับ (เอาไว้ทำโหมดทำทีละชุด)
router.get("/", (req: Request, res: Response) => {
  const category = req.query.category as string | undefined;
  const filtered = category
    ? wordList.filter((w) => w.category === category)
    : wordList;
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  res.json(shuffled.map((word) => toQuestion(word, filtered)));
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
