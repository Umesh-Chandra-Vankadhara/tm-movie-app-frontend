import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  saveUser(user: User) {
    localStorage.setItem('token',user.jwtToken);
    localStorage.setItem('user',JSON.stringify(user));
  }

  
 constructor(private httpClient:HttpClient ) { }

  signin(credentials){
    //call signin API
    let url= "http://localhost:7070/movie_app/v1/access-tokens" ;
    return this.httpClient.post(url,credentials);
 }
 signup(user){
  //call signup API
  let url= "http://localhost:7070/movie_app/v1/customers" ;
  return this.httpClient.post(url,user);
}
} 