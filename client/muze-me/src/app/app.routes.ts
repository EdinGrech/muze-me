import { Routes } from '@angular/router';
// import { inject } from '@angular/core';
// import { AuthService } from './services/auth/auth.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  {
    path: 'news',
    loadChildren: () => import('./home/home.router').then((m) => m.routes),
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then((m) => m.AuthPage),
  },
];
