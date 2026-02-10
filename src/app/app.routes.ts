import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import MaterialDemo from './material-demo/material-demo';

export const routes: Routes = [
  {
    title: 'Home',
    path: '',
    pathMatch: 'full',
    component: Demo,
    data: { icon: 'home' },
  },
  {
    title: 'Material',
    path: 'material',
    component: MaterialDemo,
    data: { icon: 'widgets' },
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
