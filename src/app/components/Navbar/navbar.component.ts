import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DynamicNavDirective } from './dynamic-nav.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, DynamicNavDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  links: Link[] = [
    {
      title: 'Demos',
      url: '/demos',
      children: [
        {
          title: 'Bindings',
          url: '/demos/bindings',
          isActive: false,
        },
        {
          title: 'Pipes',
          url: '/demos/pipes',
          isActive: false,
        },
        {
          title: 'Directives',
          url: '/demos/directives',
          isActive: false,
        },
        {
          title: 'Input-Output',
          url: '/demos/inout',
          isActive: false,
        },
        {
          title: 'Services',
          url: '/demos/service',
          isActive: false,
        },
        {
          title: 'Formulaires',
          url: '/demos/form',
          isActive: false,
        }
      ],
      isActive: true
    },
    {
      title: 'Exos',
      url: '/exos',
      children: [
        {
          title: 'Chrono',
          url: '/exos/chrono',
          isActive: false,
        },
        {
          title: 'Panier V1',
          url: '/exos/panierv1',
          isActive: false,
        },
        {
          title: 'Formulaire',
          url: 'exos/formulaire',
          isActive: false
        }
      ],
      isActive: true,
    }
  ]
}

class Link {
  title: string; // title! pour dire à TS de ne pas intervenir dans la déclaration de la propriété
  url?: string;
  children?: Link[];
  isActive?: boolean; // Ne sera pas utilisé dans cette correction
}

// interface Link {
//   title: string;
//   url?: string;
//   children?: Link[];
//   isActive?: boolean;
// }