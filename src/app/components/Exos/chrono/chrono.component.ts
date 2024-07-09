import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-chrono',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.css'
})
export class ChronoComponent {

  zero: string = '0';
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  timeUpdater: any;
  startButtonActive: boolean = false;
  resetButtonActive: boolean = true;

  start() {
    this.timeUpdater = setInterval(() => {
      if (this.seconds < 59) {
        this.seconds += 1;
      } else {
        this.seconds = 0;
        this.minutes += 1;
      }

      if (this.minutes > 59) {
        this.minutes = 0;
        this.hours += 1;
      }
    }, 1000)
    this.startButtonActive = true;
    this.resetButtonActive = false;
  }

  pause() {
    clearInterval(this.timeUpdater);
    this.startButtonActive = false;
  }

  reset() {
    clearInterval(this.timeUpdater);
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.startButtonActive = false;
    this.resetButtonActive = true;
  }

}
