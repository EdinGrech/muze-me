import { Routes } from '@angular/router';
import { HomePage } from './home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home.page').then( m => m.HomePage)
      },
      {
        path: 'saved-posts',
        loadComponent: () => import('./saved-posts/saved-posts.page').then( m => m.SavedPostsPage)
      },
      {
        path: 'user',
        loadComponent: () => import('./user/user.page').then( m => m.UserPage)
      },
      {
        path: '',
        redirectTo: '/news/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/news/home',
    pathMatch: 'full',
  },
  {
    path: 'post/:id',
    loadComponent: () => import('./post/post.page').then( m => m.PostPage)
  },
];