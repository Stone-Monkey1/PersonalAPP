import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle3',
  templateUrl: './puzzle3.component.html',
  styleUrls: ['./puzzle3.component.css']
})
export class Puzzle3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.bubbleGenerator();
  }

  bubbleGenerator() {
    function createBubble() {
      const container = document.querySelector(".container");
      const createElement = document.createElement("div");
      createElement.className = "bubble";
      createElement.style.position = "absolute";
      createElement.style.bottom = "-50px";
      createElement.style.background = "transparent";
      createElement.style.borderRadius = "50%";
      createElement.style.pointerEvents = "none";
      createElement.style.boxShadow = "inset 0 0 10px rgba(255,255,255,0.5)";
      createElement.style.animation = "@rotate_bubbles 4s linear infinite";

      var size = Math.random() * 60;

      createElement.style.width = 20 + size + 'px';
      createElement.style.height = 20 + size + 'px';
      createElement.style.left = Math.random() * innerWidth + 'px';
      container.appendChild(createElement);

      setTimeout(() => {
        createElement.remove()
      }, 4000);
    }
    setInterval(createBubble,50);
  }

  spanToBubble() {

  }


}
