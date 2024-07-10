import { Routes } from '@angular/router';
import { BindingsComponent } from './components/Demos/bindings/bindings.component';
import { PipesComponent } from './components/Demos/pipes/pipes.component';
import { ChronoComponent } from './components/Exos/chrono/chrono.component';
import { DirectivesComponent } from './components/Demos/directives/directives.component';
import { ParentComponent } from './components/Demos/inout/parent/parent.component';
import { PanierComponent } from './components/Exos/panierv1/panier/panier.component';
import { ServiceComponent } from './components/Demos/service/service.component';

export const routes: Routes = [
    {path: 'demos', children: [
        {path: 'bindings', component: BindingsComponent},
        {path: 'pipes', component: PipesComponent},
        {path: 'directives', component: DirectivesComponent},
        {path: 'inout', component: ParentComponent},
        {path: 'service', component: ServiceComponent}
    ]},
    {path: 'exos', children: [
        {path: 'chrono', component: ChronoComponent},
        {path: 'panierv1', component: PanierComponent}
    ]}
];
