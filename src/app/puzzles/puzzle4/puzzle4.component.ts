import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/_services/hangman.service';

@Component({
  selector: 'app-puzzle4',
  templateUrl: './puzzle4.component.html',
  styleUrls: ['./puzzle4.component.css']
})
export class Puzzle4Component implements OnInit {
  question: string = '';
  questions: string[] = [];
  guesses: string[] = [];
  category: string = '';
  restartGameBtnShown = false;

  constructor(private hangmanService: HangmanService) { }

  ngOnInit(): void {
    this.hangmanService.getQuestions().subscribe((response) => {
      this.questions = response.items;
      this.category = response.category;
      this.pickNewQuestion();
    });
  }

  guess(letter: string) {
    if (!letter || this.guesses.includes(letter)) {
      return;
    }
    this.guesses = [... this.guesses, letter]
  }

  dummyClick() {
    const key = prompt('Enter a key') || '';
    this.guess(key);
  }

  reset() {
    this.guesses = [];
    this.pickNewQuestion();
    this.restartGameBtnShown = false;
  }

  pickNewQuestion() {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.question = this.questions[randomIndex];
  }

  onGameFinished() {
    this.restartGameBtnShown = true;
  }

}
