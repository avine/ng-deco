import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import MaterialDemo from './material-demo/material-demo';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Demo,
  },
  {
    path: 'material',
    component: MaterialDemo,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
