import { Component } from '@angular/core';
import { EnfantComponent } from '../enfant/enfant.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [EnfantComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  title: string = 'La démo des input-ouput pour les CyberSecu2  !'

  result: number = 0;

  num1: number = 0;
  num2: number = 0;

  calculationResult(event: number) {
    this.result = event;
  }

}
