import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizComponent } from "./frontend-additions/quiz/quiz.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuizComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
