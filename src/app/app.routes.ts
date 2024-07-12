import { Routes } from '@angular/router';
import { BindingsComponent } from './components/Demos/bindings/bindings.component';
import { PipesComponent } from './components/Demos/pipes/pipes.component';
import { ChronoComponent } from './components/Exos/chrono/chrono.component';
import { DirectivesComponent } from './components/Demos/directives/directives.component';
import { ParentComponent } from './components/Demos/inout/parent/parent.component';
import { PanierComponent } from './components/Exos/panierv1/panier/panier.component';
import { ServiceComponent } from './components/Demos/service/service.component';
import { FormulairesComponent } from './components/Demos/formulaires/formulaires.component';
import { FormulaireComponent } from './components/Exos/formulaire/formulaire.component';
import { ProfileComponent } from './components/Exos/formulaire/profile/profile.component';
import { authGuard } from './components/Exos/formulaire/auth.guard';
import { leaveProfileGuard } from './components/Exos/formulaire/leave-profile.guard';

export const routes: Routes = [
    {path: 'demos', children: [
        {path: 'bindings', component: BindingsComponent},
        {path: 'pipes', component: PipesComponent},
        {path: 'directives', component: DirectivesComponent},
        {path: 'inout', component: ParentComponent},
        {path: 'service', component: ServiceComponent},
        {path: 'form', component: FormulairesComponent}
    ]},
    {path: 'exos', children: [
        {path: 'chrono', component: ChronoComponent},
        {path: 'panierv1', component: PanierComponent},
        {path: 'formulaire', component: FormulaireComponent},
        // On ajoute le canDeactivate dans un array comme pour le canActivate
        {path: 'profile', component: ProfileComponent, canActivate: [authGuard], canDeactivate: [leaveProfileGuard]}
    ]}
];
