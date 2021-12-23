import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder , FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { SignupService } from 'src/app/core/signup.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userRegistration:FormGroup
  userType: any;
  registeredUsers:any
  age: number;
  addOnBlur = true;
 
  constructor(private authService:SignupService, private fb:FormBuilder,private router:Router) { }

  minDate=new Date(new Date().setFullYear(new Date().getFullYear() -90));
  maxDate=new Date(new Date().setFullYear(new Date().getFullYear() -18));
  ngOnInit() {
console.log(new Date().getFullYear()-18)
    this.initForm()
   
  }

  addEvent( event: MatDatepickerInputEvent<Date>) {
    console.log(event.value.getFullYear())
    // this.events= moment(event.value).format().split('T')[0]; 
    // console.log(this.events) 
    var d=new Date().getFullYear()
    // console.log(typeof(d))
    console.log(`user Age ${d-event.value.getFullYear()}`)
    this.age=d-event.value.getFullYear()
    this.userRegistration.controls['age'].patchValue(this.age)


  }
  initForm(){
this.userRegistration=this.fb.group({
  email:['',(Validators.required)],
  password:['',[Validators.required,Validators.maxLength(5)]],
  isadmin:['',(Validators.required)],
  dob:['',(Validators.required)],
  age:['',(Validators.required)],
  mobileno:this.fb.array([]),
})
  }

  NewMobileNo():FormGroup{
    return this.fb.group({
      mobile: new FormControl('', Validators.required),
     
    });
  }

  get mobileno():FormArray{
    return <FormArray>this.userRegistration.get('mobileno');
  }

  addMobileNo(){
    this.mobileno.push(this.NewMobileNo())
  }

  signUp(formValue){
    debugger
   const param={
      email:formValue.email,
      password:formValue.password,
      isadmin:this.userType,
      dob:formValue.dob,
      age:formValue.age,
      mobileno:formValue.mobileno
    }
    this.authService.registerUser(param).subscribe(res=>console.log(res))
  }

  // validationCheck(controlname:any){
  //   debugger
  //   console.log(this.userRegistration.controls[controlname])
  // }

 

 

  onSubmit(){
    debugger
    let userFound:boolean=false
    // console.log("in submit")
    this.authService.getUsers().subscribe(res=>{console.log(res)
      this.registeredUsers=res
      // this.registeredUsers.forEach(user => {
      //   debugger
      //  if( user.email==this.userRegistration.value.email ){
      //    console.log("User with email already exist")
      //    return;
      //    }
    
      // })
      for(let user of this.registeredUsers){
        debugger
        if( user.email==this.userRegistration.value.email ){
             console.log("User with email already exist")
             userFound=true
             break;
             }
             else{
            userFound=false;
             }
      }
if(userFound==false){
      console.log(this.userRegistration.value)
      if(this.userRegistration.value.isadmin==true){
    this.userType='admin'
      }
      else{
        this.userType='user'
      }
  
      
      this.signUp(this.userRegistration.value)
      this.router.navigate(['auth/login'])
    }
      })

  }
}
