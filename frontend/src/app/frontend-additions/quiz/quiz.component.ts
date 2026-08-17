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
  question = signal<QuizQuestion | null>(null);
  selectedAnswer = signal('');
  state = signal<AnswerState>('idle');
  correctAnswer = signal('');
  score = signal(0);
  total = signal(0);
  loading = signal(true);

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.loadNextQuestion();
  }

  loadNextQuestion(): void {
    this.loading.set(true);
    this.state.set('idle');
    this.selectedAnswer.set('');
    this.wordService.getRandomQuestion().subscribe({
      next: (q) => {
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
    });
  }
}
