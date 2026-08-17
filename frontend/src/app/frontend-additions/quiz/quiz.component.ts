import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { WordService } from '../services/word.service';
import { QuizQuestion } from '../services/word.model';

type AnswerState = 'idle' | 'correct' | 'wrong';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit {
  readonly categories = [
    'I. ประเภทมื้ออาหารและหมวดอาหาร', 'II. อาหารจานหลักและเนื้อสัตว์',
    'III. ผักและผลไม้', 'IV. อาหารทะเล', 'V. ผลิตภัณฑ์จากนมและเครื่องดื่ม',
    'VI. ของหวานและของว่าง', 'VII. รสชาติและการปรุงอาหาร', 'VIII. Collocation เกี่ยวกับอาหาร',
  ];
  category = signal<string | null>(null);
  question = signal<QuizQuestion | null>(null);
  selectedAnswer = signal('');
  state = signal<AnswerState>('idle');
  correctAnswer = signal('');
  score = signal(0);
  total = signal(0);
  loading = signal(true);
  private advanceTimer?: ReturnType<typeof setTimeout>;
  private seenQuestionIds = new Set<number>();

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.loading.set(false);
  }

  selectCategory(category: string): void {
    this.clearAdvanceTimer();
    this.seenQuestionIds.clear();
    this.category.set(category);
    this.score.set(0);
    this.total.set(0);
    this.loadNextQuestion();
  }

  chooseAnotherCategory(): void {
    this.clearAdvanceTimer();
    this.question.set(null);
    this.seenQuestionIds.clear();
    this.category.set(null);
    this.loading.set(false);
  }

  private clearAdvanceTimer(): void {
    if (this.advanceTimer) {
      clearTimeout(this.advanceTimer);
      this.advanceTimer = undefined;
    }
  }

  loadNextQuestion(): void {
    this.clearAdvanceTimer();
    this.loading.set(true);
    this.state.set('idle');
    this.selectedAnswer.set('');
    const category = this.category();
    if (!category) return;
    this.wordService.getRandomQuestion(category, [...this.seenQuestionIds]).subscribe({
      next: (q) => {
        this.seenQuestionIds.add(q.id);
        this.question.set(q);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }

  submitAnswer(answer: string): void {
    const q = this.question();
    if (!q || !answer || this.state() !== 'idle') {
      return;
    }

    this.selectedAnswer.set(answer);
    this.wordService.checkAnswer(q.id, answer).subscribe((res) => {
      this.total.update((t) => t + 1);
      this.correctAnswer.set(res.correctAnswer);
      if (res.correct) {
        this.score.update((s) => s + 1);
        this.state.set('correct');
      } else {
        this.state.set('wrong');
      }
      this.advanceTimer = setTimeout(() => this.loadNextQuestion(), 900);
    });
  }
}
