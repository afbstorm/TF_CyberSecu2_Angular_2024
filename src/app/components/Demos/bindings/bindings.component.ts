import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {

  title: string = 'La démo de binding pour les CyberSecu2 !';
  adaptativeClass: boolean = true;
  disabledAttribute: boolean = false;

  bindingOneWaySimple: string = 'Tanya fume des clopes invisibles.'

  // ⚠️ En angular les propriétés CSS ne sont liées qu'entre l'HTML ety le fichier CSS
  // Dans ce cas précis (ci-dessous), la classe CSS n'est pas connue par la stylesheet car elle est intégrée par la propriété innerHTML
  // On va donc devoir ajouter la définition du style dans la fichier style globale (styles.css) ⚠️
  bindingOneWayAvecHTML: string = 'Zac il connait <span class="bold">TOUT</span> Angular.';

  bindingTwoWays: string = "Damien n'a jamais fait d'Angular mais il kiffe déjà beaucoup trop.";

  eventBinding() {
    console.log("J'ai été activé par le clic sur le bouton, sans conditions je peux activer à l'infini");
  }

  classBinding() {
    this.adaptativeClass = !this.adaptativeClass;
  }

  attributeBinding() {
    this.disabledAttribute = true;
  }
}
