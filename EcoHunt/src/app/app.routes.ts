import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', children: [
        { path: '', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) }, 
        { path: ':postId', loadComponent: () => import('./current-post/current-post.component').then(c => c.CurrentPostComponent) }, 
    ] },
    { path: 'login', loadComponent: () => import('./user/login/login.component').then(c => c.LoginComponent) },   
    { path: 'profile', loadComponent: () => import('./user/profile/profile.component').then(c => c.ProfileComponent), canActivate: [AuthGuard] },
    { path: 'register', loadComponent: () => import('./user/register/register.component').then(c => c.RegisterComponent) },
    { path: 'cleaned', loadComponent: () => import('./cleaned-places/cleaned-places.component').then(c => c.CleanedPlacesComponent) },
    { path: 'create', loadComponent: () => import('./create-dump-place/create-dump-place.component').then(c => c.CreateDumpPlaceComponent), canActivate: [AuthGuard], },
    { path: 'actual-dump-places', children: [
        { path: '', loadComponent: () => import('./actual-dump-places/actual-dump-places.component').then(c => c.ActualDumpPlacesComponent) }, 
        { path: ':postId', loadComponent: () => import('./current-post/current-post.component').then(c => c.CurrentPostComponent) }, 
    ]
},
    { path: 'error', loadComponent: () => import('./core/error-msg/error-msg.component').then(c => c.ErrorMsgComponent) },
    { path: 'about', loadComponent: () => import('./core/about/about.component').then(c => c.AboutComponent) },
    { path: '404', loadComponent: () => import('./error/error.component').then(c => c.ErrorComponent) },
    { path: '**', redirectTo: '/404' },
];
