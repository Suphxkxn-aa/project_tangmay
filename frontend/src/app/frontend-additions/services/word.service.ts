import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckAnswerResponse, QuizQuestion } from './word.model';

@Injectable({ providedIn: 'root' })
export class WordService {
  // เปลี่ยนเป็น URL ของ backend จริงตอนขึ้น production
  private readonly apiUrl = 'https://project-tangmay-backend.onrender.com/api/words';

  constructor(private http: HttpClient) {}

  getRandomQuestion(category: string): Observable<QuizQuestion> {
    return this.http.get<QuizQuestion>(`${this.apiUrl}/random`, { params: { category } });
  }

  checkAnswer(id: number, answer: string): Observable<CheckAnswerResponse> {
    return this.http.post<CheckAnswerResponse>(`${this.apiUrl}/check`, { id, answer });
  }
}
