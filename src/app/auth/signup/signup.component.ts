import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup = new User();
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void { }
  signupUser(){
    this.signup.userTypeId = 2;//ADMIN
    //auth service,pass signup user
   this.authservice.signup(this.signup).subscribe(result =>{
      //result is success -> navigate to login   
      console.log(result);
      this.router.navigate(['/signin'])
     },err =>{
        //fail display error
        console.log(err);
        alert(JSON.stringify(err));
     })
     
  }

}
