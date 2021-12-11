import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/core/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userRegistration:FormGroup

  constructor(private authService:SignupService, private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.initForm()
   
  }
  initForm(){
this.userRegistration=this.fb.group({
  email:['',(Validators.required)],
  password:['',(Validators.required)]
})
  }

  signUp(formValue){
   const param={
      email:formValue.email,
      password:formValue.password

    }
    this.authService.registerUser(param).subscribe(res=>console.log(res))
  }

  onSubmit(){
    // console.log("in submit")
    console.log(this.userRegistration.value)
    this.signUp(this.userRegistration.value)
    this.router.navigate(['auth/login'])
  }
}
