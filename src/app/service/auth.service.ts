import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private url="http://localhost:7070/movie_app/v1/access-tokens" ;
  
 constructor(private httpClient:HttpClient ) { }

  signin(credentials){
    //call sign API
    return this.httpClient.post(this.url,credentials)
}
} 