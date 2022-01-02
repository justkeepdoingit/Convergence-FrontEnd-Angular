import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './landing-page/log-in/log-in.component';
import { RegisterComponent } from './landing-page/register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'Landing-Page', component: LandingPageComponent, 
  children: [
    {path:'Log-In', component: LogInComponent},
    {path:'Register', component: RegisterComponent}
  ]
},
  {path:'', redirectTo: 'Landing-Page', pathMatch:'full'},
  {path:'Home', component: HomeComponent},
  {path:'Profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
