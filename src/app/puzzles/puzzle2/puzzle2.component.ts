import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle2',
  templateUrl: './puzzle2.component.html',
  styleUrls: ['./puzzle2.component.css']
})
export class Puzzle2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.SpawnRandomButton();
  }

  SpawnRandomButton() {
    var b = document.querySelector("button");
    b.onload
    function change() {
      var i = Math.floor(Math.random() * window.innerWidth);
      var j = Math.floor(Math.random() * window.innerHeight);
      b.style.left = i + "px";
      b.style.top = j + "px";
    }
  }

  RandomButtonLocation() {
    var b = document.querySelector("button");
    b.addEventListener("click", change);
    function change() {
      var i = Math.floor(Math.random() * window.innerWidth);
      var j = Math.floor(Math.random() * window.innerHeight);
      b.style.left = i + "px";
      b.style.top = j + "px";
    }
  }
}
