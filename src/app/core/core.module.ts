import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupService } from './signup.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule 
  ],
  providers:[
    SignupService,
    {
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptorService,
			multi: true
		},
  ]
})
export class CoreModule { }
