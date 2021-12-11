import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupService } from './signup.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService:SignupService) { }
intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{


 let tokenizeReq= req.clone({

   setHeaders:{
     Authorization:`Bearer ${this.authService.getToken()}`
   }
  
 })
 console.log(tokenizeReq)

return next.handle(tokenizeReq)


}
}
