import { CanDeactivateFn } from '@angular/router';

// Création d'une interface qui a une méthode qui retourne un booléen ou une promise booléenne
export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Promise<boolean>
}

export const leaveProfileGuard: CanDeactivateFn<CanComponentDeactivate> = (component: CanComponentDeactivate) => {

  // Si la méthode return quelque chose on prend sa réponse, sinon on return truc par défaut
  return component.canDeactivate ? component.canDeactivate() : true;
};
