import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.changeClass();
  }

  changeClass() {

    window.onload = function () {
      const elements = document.getElementsByClassName('wordPop');

      if (elements) {
        for (let i = 0; i <= elements.length; i++) {
          elements[i].addEventListener('mouseover', () => {
            elements[i].classList.add('animated');
          });

          elements[i].addEventListener('animationend', () => {
            elements[i].classList.remove('animated');
          });
        }
      }
    }
  }
}
