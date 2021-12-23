import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Rxjs
import { BehaviorSubject, Observable } from 'rxjs';
import { Iuser } from '../shared/navbar/user.model';

@Injectable()
export class SignupService {
totalUsers=new BehaviorSubject(null)
users$=this.totalUsers.asObservable()
  constructor(private http:HttpClient) { 

  }

  getTotalUsers(quantity:number){
    this.totalUsers.next(quantity)
  }

  registerUser(param:any):Observable<Iuser>{
    return this.http.post<Iuser>(`http://localhost:3000/users`,param)
  }

  getUsers():Observable<Iuser>{
    return this.http.get<Iuser>(`http://localhost:3000/users`)
  }

  updateUsers(id:number,param:any):Observable<Iuser>{
    debugger
    return this.http.put<Iuser>(`http://localhost:3000/users/${id}`,param)
  }
getToken(){
  return  localStorage.getItem('token')
}

isLoggedIn(){
  debugger
  return !! localStorage.getItem('token')
}

}
