import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/core/signup.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userType:string;
  totalusers:number;
  constructor(private router:Router,private authService:SignupService) {
this.authService.users$.subscribe((res:number)=>this.totalusers=res)
   }

  ngOnInit() {
    this.userType=localStorage.getItem('isAdmin')
 
  }
  goToHomePage(){
    this.router.navigate(['auth/home'])
  }
  goToAbout(){
    this.router.navigate(['auth/about'])
  }
  goToContact(){
    this.router.navigate(['auth/contact'])
  }
  goToUserList(){
    this.router.navigate(['auth/userlist'])
  }

}
