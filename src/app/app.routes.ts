import { Routes } from '@angular/router';
import { BindingsComponent } from './components/Demos/bindings/bindings.component';
import { PipesComponent } from './components/Demos/pipes/pipes.component';

export const routes: Routes = [
    {path: 'demos', children: [
        {path: 'bindings', component: BindingsComponent},
        {path: 'pipes', component: PipesComponent}
    ]}
];
