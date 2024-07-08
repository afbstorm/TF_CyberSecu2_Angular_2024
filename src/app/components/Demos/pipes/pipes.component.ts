import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, CurrencyPipe } from '@angular/common';
import { CustomPipe } from './custom.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, CustomPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  title: string = 'La démo de pipes pour les CyberSecu2 !'

  stringEnMajuscule: string = 'Age of Mythology';
  stringEnMinuscule: string = 'PAX DEI';
  premiereLettreEnMajuscule: string = 'élisa est super gentille.';

  dateDuJour: Date = new Date();
  argentArgent: number = 42;
}
