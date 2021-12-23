import { Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.scss']
})
export class UsersUpdateComponent implements OnInit,OnChanges {
@Input() public userdata;
@Output () public childEvent= new EventEmitter()
userEdit:FormGroup;
age:number;
  constructor(private fb:FormBuilder) { }
  
  minDate=new Date(new Date().setFullYear(new Date().getFullYear() -90));
  maxDate=new Date(new Date().setFullYear(new Date().getFullYear() -18));
ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.setFormValue()
}
  ngOnInit() {
    this.initForm()
   
  }
  initForm(){
  this.userEdit=this.fb.group({
    id:[''],
    email:['',(Validators.required)],
    isadmin:['',(Validators.required)],
    dob:['',(Validators.required)],
    age:['',(Validators.required)],
    mobileno:this.fb.array([]),
  })
    
  }

  setFormValue(){
    this.userEdit.controls['id'].patchValue(this.userdata.id)
    this.userEdit.controls['email'].patchValue(this.userdata.email);
    this.userEdit.controls['dob'].patchValue(this.userdata.dob);
    this.userEdit.controls['age'].patchValue(this.userdata.age)

    if(this.userdata.isadmin=='admin'){
    this.userEdit.controls['isadmin'].patchValue(true)
    }
    else{
      this.userEdit.controls['isadmin'].patchValue(false)
    }
  }

  addEvent( event: MatDatepickerInputEvent<Date>) {
    console.log(event.value.getFullYear())
    var d=new Date().getFullYear()
    console.log(`user Age ${d-event.value.getFullYear()}`)
    this.age=d-event.value.getFullYear()
    this.userEdit.controls['age'].patchValue(this.age)


  }
  onSubmit(){
    debugger
    this.childEvent.emit(this.userEdit)
  }
}
