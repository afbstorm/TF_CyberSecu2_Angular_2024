import { Routes } from '@angular/router';
import { BindingsComponent } from './components/Demos/bindings/bindings.component';
import { PipesComponent } from './components/Demos/pipes/pipes.component';
import { ChronoComponent } from './components/Exos/chrono/chrono.component';
import { DirectivesComponent } from './components/Demos/directives/directives.component';

export const routes: Routes = [
    {path: 'demos', children: [
        {path: 'bindings', component: BindingsComponent},
        {path: 'pipes', component: PipesComponent},
        {path: 'directives', component: DirectivesComponent}
    ]},
    {path: 'exos', children: [
        {path: 'chrono', component: ChronoComponent}
    ]}
];
