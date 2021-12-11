import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Rxjs
import { Observable } from 'rxjs';
import { Iuser } from '../shared/navbar/user.model';

@Injectable()
export class SignupService {

  constructor(private http:HttpClient) { 

  }
  registerUser(param:any):Observable<Iuser>{
    return this.http.post<Iuser>(`http://localhost:3000/users`,param)
  }

  getUsers():Observable<Iuser>{
    return this.http.get<Iuser>(`http://localhost:3000/users`)
  }
getToken(){
  return  localStorage.getItem('token')
}

isLoggedIn(){
  debugger
  return !! localStorage.getItem('token')
}

}
