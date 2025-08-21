import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'catalog', loadComponent: () => import('./pages/catalog/catalog.component').then(m => m.CatalogComponent) },
  { path: 'details/:id', loadComponent: () => import('./pages/details/details.component').then(m => m.DetailsComponent) },
  { path: 'create', loadComponent: () => import('./pages/create-ad/create-ad.component').then(m => m.CreateAdComponent) },
  { path: 'edit/:id', canActivate: [authGuard], loadComponent: () => import('./pages/edit-ad/edit-ad.component').then(m => m.EditAdComponent) },
  { path: 'profile', canActivate: [authGuard], loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) },
  { path: 'login', canActivate: [guestGuard], loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', canActivate: [guestGuard], loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
  { path: 'my-ads', canActivate: [authGuard], loadComponent: () => import('./pages/my-ads/my-ads.component').then(m => m.MyAdsComponent) },
  { path: 'liked-ads', canActivate: [authGuard], loadComponent: () => import('./pages/liked-ads/liked-ads.component').then(m => m.LikedAdsComponent) },
  { path: 'settings', canActivate: [authGuard], loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },
  { path: 'questions', loadComponent: () => import('./pages/questions/questions.component').then(m => m.QuestionsComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
];