import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SignupService } from 'src/app/core/signup.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit,OnChanges {
  registeredUsers: any;
  edituser:any;
  updatedData:any;
  myusers:Array<string>=[];
  constructor(private authService:SignupService ) { }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }
  ngOnInit() {
    this.userList()
  }
  userList(){
    this.authService.getUsers().subscribe(res=>{
      this.registeredUsers=res
      console.log(this.registeredUsers)
      this.registeredUsers.forEach(element => {
        if(element.isadmin=="user"){
        this.myusers.push(element.email)
        console.log(this.myusers)
        }
      });
     this.authService.getTotalUsers(this.registeredUsers.length)
      })
  }

  editDetails(fields:any){
console.log(fields)
this.edituser=fields
  }
  childData(e:any){
this.updatedData=e.value
if(this.updatedData.isadmin==true){
  this.updatedData.isadmin='admin'
}
else{
  this.updatedData.isadmin='user'
}
console.log(this.updatedData)
this.updateDtails()
  }

  updateDtails(){
    debugger
    const params={
      email:this.updatedData.email,
      password:this.updatedData.password,
      isadmin:this.updatedData.isadmin,
      age:this.updatedData.age,
      dob:this.updatedData.dob
    }
    this.authService.updateUsers(this.updatedData.id,params).subscribe(res=>{
      console.log(res)
      this.userList()
    })
  }
}
