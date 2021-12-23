import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from'@angular/router'
import { SignupService } from 'src/app/core/signup.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  registeredUsers:any;
  constructor(private fb:FormBuilder, private authService:SignupService, private router:Router) {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['auth/home'])
    }
   }

  ngOnInit() {
    this.initForm()
   
  }
  initForm(){
this.loginForm=this.fb.group({
  email:['',(Validators.required)],
  password:['',(Validators.required)]
})
  }

  login(formValue){
    debugger
   const param={
      email:formValue.email,
      password:formValue.password

    }
    this.authService.getUsers().subscribe(res=>{console.log(res)
    this.registeredUsers=res
    this.registeredUsers.find(user=>{
     if( user.email==this.loginForm.value.email && user.password==this.loginForm.value.password  ){
       console.log("logged in successfully")
       const token="abc.def.ghi"
       const userType=user.isadmin
      
       localStorage.setItem('isAdmin',userType)

       localStorage.setItem('token',token)
       this.router.navigate(['auth/home'])
     }
    })
    })
  }

  onSubmit(){
    // console.log("in submit")
    console.log(this.loginForm.value)
    this.login(this.loginForm.value)
  }
}
