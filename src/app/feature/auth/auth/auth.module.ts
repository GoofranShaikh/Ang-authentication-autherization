import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { InterceptorService } from 'src/app/core/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/navbar/shared.module';



const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers:[
    // {
		// 	provide: HTTP_INTERCEPTORS,
		// 	useClass: InterceptorService,
		// 	multi: true
		// },

  ]
})
export class AuthModule { }
