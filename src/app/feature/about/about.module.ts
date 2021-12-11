import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/app/core/auth-guard.guard';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/navbar/shared.module';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    canActivate:[AuthGuardGuard]
  },

];
@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    AuthGuardGuard
  ]
  
})
export class AboutModule { }
