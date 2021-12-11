import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './core/auth-guard.guard';
import { LoginComponent } from './feature/auth/login/login.component';
import { SignupComponent } from './feature/auth/signup/signup.component';


const routes: Routes = [
 
  {path:'auth',loadChildren:()=>import('../app/feature/auth/auth/auth.module').then(m=>m.AuthModule)},
  {path:'auth',loadChildren:()=>import('../app/feature/auth/auth/auth.module').then(m=>m.AuthModule)},
  {path:'auth',loadChildren:()=>import('../app/feature/home/home.module').then(m=>m.HomeModule)},
  {path:'auth',loadChildren:()=>import('../app/feature/about/about.module').then(m=>m.AboutModule)},
  {path:'auth',loadChildren:()=>import('../app/feature/contactus/contactus.module').then(m=>m.ContactusModule)},
  {path:'auth',loadChildren:()=>import('../app/shared/navbar/shared.module').then(m=>m.SharedModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
