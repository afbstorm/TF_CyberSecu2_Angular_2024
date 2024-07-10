import { Component } from '@angular/core';
import { ListeComponent } from "../liste/liste.component";

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [ListeComponent],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {

  title: string = 'Exercice panier de course V1';
}
