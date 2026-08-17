import express from "express";
import cors from "cors";
import wordsRouter from "./routes/words.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/words", wordsRouter);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Backend ทำงานที่ http://localhost:${PORT}`);
});
