import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CleanedPlacesComponent } from './cleaned-places/cleaned-places.component';
import { AboutComponent } from './core/about/about.component';
import { CreateDumpPlaceComponent } from './create-dump-place/create-dump-place.component';
import { ActualDumpPlacesComponent } from './actual-dump-places/actual-dump-places.component';
import { CurrentPostComponent } from './current-post/current-post.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './user/profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', children: [
        { path: '', component: HomeComponent }, 
        { path: ':postId', component: CurrentPostComponent, canActivate: [AuthGuard] }, 
    ] },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [ AuthGuard ] },
    { path: 'register', component: RegisterComponent },
    { path: 'cleaned-places', component: CleanedPlacesComponent },
    { path: 'create', component: CreateDumpPlaceComponent, canActivate: [AuthGuard] },
    { path: 'actual-dump-places', children: [
        { path: '', component: ActualDumpPlacesComponent }, 
        { path: ':postId', component: CurrentPostComponent }, 
    ] , canActivate: [AuthGuard]
},
    { path: 'about', component: AboutComponent },
    { path: '404', component: ErrorComponent },
    { path: '**', redirectTo: '/404' },
];
