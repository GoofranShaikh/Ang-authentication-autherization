import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { AuthGuardGuard } from 'src/app/core/auth-guard.guard';
import { SharedModule } from 'src/app/shared/navbar/shared.module';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canActivate:[AuthGuardGuard]
  },

];

@NgModule({
  declarations: [HomePageComponent,],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers:[AuthGuardGuard]
})
export class HomeModule { }
