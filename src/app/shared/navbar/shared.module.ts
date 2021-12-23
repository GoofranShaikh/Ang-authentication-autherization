import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/app/core/auth-guard.guard';
import { AdminGuard } from 'src/app/core/admin.guard';
import { UsersUpdateComponent } from './user-list/users-update/users-update.component';
import { MatIconModule } from "@angular/material/icon"
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule,MatInputModule, MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';

const routes: Routes = [
  {
    path: 'userlist',
    component: UserListComponent,
    canActivate:[AuthGuardGuard,AdminGuard],
 
  },

];

@NgModule({
  declarations: [NavbarComponent, UserListComponent, UsersUpdateComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    MatChipsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers:[AuthGuardGuard,AdminGuard],
  exports:[
    NavbarComponent
  ]

})
export class SharedModule { }
