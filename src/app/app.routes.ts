import { Routes } from '@angular/router';
import { BindingsComponent } from './components/Demos/bindings/bindings.component';

export const routes: Routes = [
    {path: 'demos', children: [
        {path: 'bindings', component: BindingsComponent}
    ]}
];
