import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/app/core/auth-guard.guard';
import { AdminGuard } from 'src/app/core/admin.guard';

const routes: Routes = [
  {
    path: 'userlist',
    component: UserListComponent,
    canActivate:[AuthGuardGuard,AdminGuard],
 
  },

];

@NgModule({
  declarations: [NavbarComponent, UserListComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes),
  ],
  providers:[AuthGuardGuard,AdminGuard],
  exports:[
    NavbarComponent
  ]

})
export class SharedModule { }
