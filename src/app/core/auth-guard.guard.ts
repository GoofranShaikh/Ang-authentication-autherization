import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService } from './signup.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService:SignupService,private router:Router){}
  canActivate(): boolean {
if(this.authService.isLoggedIn()){
  return true;
}
else{
  this.router.navigate(['auth/login'])
}
    
  }

//   canActivateChild():boolean{
//     console.log('in child guard')
// const userType=localStorage.getItem('usertype')
// if(userType=='admin'){
//   console.log('this is admin user')
//   return true
// }
// else{
//   console.log('this is normal user')
//   return false
// }
//   }
  
}
