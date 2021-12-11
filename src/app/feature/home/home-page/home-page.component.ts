import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/core/signup.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private authService:SignupService, private router:Router) { 
    
 
  }

  ngOnInit() {
    this.authService.getUsers().subscribe(res=>{console.log(res)})
  }

  gotToHomePage(){
    this.router.navigate(['auth/home'])
  }

}
