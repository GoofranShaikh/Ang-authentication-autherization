import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/app/core/auth-guard.guard';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/navbar/shared.module';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    canActivate:[AuthGuardGuard]
  },

];

@NgModule({
  declarations: [ContactComponent],
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
export class ContactusModule { }
