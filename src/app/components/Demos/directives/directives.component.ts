import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CustomDirective } from './custom.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf, NgFor, CustomDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  title: string = 'La démo des directives pour les CyberSecu2  !'

  showIfTrueNgIf: boolean = false; // Va être utilisé avec *ngIf
  showIfTrueIf: boolean = false; // Va être utilisé avec @if

  arrayOfThings: string[] = ["Baldur's Gate 3", "Pax Dei", "Hello", "World", "Angular is Great", "But React Is Better"];
  arrayOfThings2: string[] = [];

  showAndHideInvisibleThings() {
    this.showIfTrueNgIf = !this.showIfTrueNgIf;
  }
  showAndHideInvisibleThings2() {
    this.showIfTrueIf = !this.showIfTrueIf;
  }

}
