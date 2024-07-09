import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent implements OnChanges{

  // Le décorateur @Input() défini les propriétés que le composant parent envoi à l'enfant
  @Input() info: string;
  @Input() num1: number;
  @Input() num2: number;

  // Le décorateur @Output() défini l'information que l'enfant envoi au parent sous la forme d'un événement
  @Output() calculeMoiCa: EventEmitter<number> = new EventEmitter<number>(); 

  // ngOnChanges fait partie du cycle de vie d'un composant Angular, qui est appelé lorsque les valeurs qu'il écoute changent
  // Ici, si num1 ou num2 changent, il se déclenche
  ngOnChanges(changes: SimpleChanges): void {
    if ('num1' in changes || 'num2' in changes) {
      this.calculate();
    }
  }

  calculate() {
    const result = this.num1 + this.num2;
    this.calculeMoiCa.emit(result);
  }

}
