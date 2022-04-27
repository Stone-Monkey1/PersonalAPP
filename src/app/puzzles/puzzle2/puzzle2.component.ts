import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle2',
  templateUrl: './puzzle2.component.html',
  styleUrls: ['./puzzle2.component.css']
})
export class Puzzle2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.SpawnButton();
    this.BlockInspect();
  }

  SpawnButton() {
    var button = document.querySelector<HTMLElement>('#click');
    var randomTop = getRandomNumber(0, (window.innerHeight - 100));
    var randomLeft = getRandomNumber(0, (window.innerWidth - 100));

    button.style.top = randomTop + "px";
    button.style.left = randomLeft + "px";

    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }
  }

  BlockInspect() {
    document.onkeydown = function (e) {
      if (e.key == 'Enter') {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
      }
    }
  }
}
