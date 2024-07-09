import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[changesBackground]',
  standalone: true
})
export class CustomDirective {

  // ElementRef : C'est un wrapper qui va se mettre autour d'un élément natif de la vue (on récupère sa référence).
  // On va l"utiliser pour manipuler les propriétés du DOM de cet élément

  // Renderer2 : C'est une classe abstraite qui fournit des méthodes utiles pour manipuler l'UI. 

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    )
  }

}
