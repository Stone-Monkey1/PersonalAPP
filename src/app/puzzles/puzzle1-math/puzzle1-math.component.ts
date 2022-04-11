import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle1-math',
  templateUrl: './puzzle1-math.component.html',
  styleUrls: ['./puzzle1-math.component.css']
})
export class Puzzle1MathComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.question1();
    this.question2();
    this.question3();
    this.question4();
    this.toggleHint1();
    this.toggleHint2();
    this.toggleHint3();
  }

  question1() {
    var a = Math.floor(Math.random() * 93) + 1;
    var b = 93 - a;

    var statement = ("What is " + a + " " + "+" + " " + b + "?");
    document.getElementById('statement1').innerHTML = statement;
  }
  question2() {
    var a = Math.floor(Math.random() * 15) + 1;
    var b = 15 - a;

    var statement = ("What  is " + a + " " + "+" + " " + b + "?");
    document.getElementById('statement2').innerHTML = statement;
  }
  question3() {
    var a = Math.floor(Math.random() * 31) + 1;
    var b = 31 - a;

    var statement = ("What is " + a + " " + "+" + " " + b + "?");
    document.getElementById('statement3').innerHTML = statement;
  }
  question4() {
    var a = Math.floor(Math.random() * 73) + 1;
    var b = 73 - a;

    var statement = ("What is " + a + " " + "+" + " " + b + "?");
    document.getElementById('statement4').innerHTML = statement;
  }

  refreshPage() {
    window.location.reload();
  }

  // toggleHint1() {
  //   var statement = ("Hint 1. Do you notice any similarities in the numbers once they are submitted? What could you do with them?");
  //   document.getElementById('hint1').innerHTML = statement;
  // }

  toggleHint1() {
    var x = document.getElementById("hint1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  toggleHint2() {
    var x = document.getElementById("hint2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  toggleHint3() {
    var x = document.getElementById("hint3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}
