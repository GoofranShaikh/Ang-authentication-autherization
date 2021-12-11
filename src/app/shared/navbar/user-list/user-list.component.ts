import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/core/signup.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  registeredUsers: any;
  myusers:Array<string>=[];
  constructor(private authService:SignupService ) { }

  ngOnInit() {
    this.userList()
  }
  userList(){
    this.authService.getUsers().subscribe(res=>{
      this.registeredUsers=res
      console.log(this.registeredUsers)
      this.registeredUsers.forEach(element => {
        if(element.usertype=="user"){
        this.myusers.push(element.email)
        console.log(this.myusers)
        }
      });
     
      })
  }

}
