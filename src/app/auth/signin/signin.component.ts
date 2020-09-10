import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  Username:string;
  Password:string;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(credentials:NgForm){
    console.log(credentials);
    console.log(this.Username+" "+this.Password);
    //call service method ,pass params 
    this.authService.signin(credentials).subscribe(response =>{
      //if success,
      // response -> localstroage
      //Admin -> admindashboard
      // user -> userdashboard
      console.log(response.jwtToken);
      // if(response.userTypeId === 1){
      //      ///navigate to customer home 
      // }
      // else{
      //     // navigate to admin dashboard
      // }
      console.log(response);
    },err => {
      //if fail
      console.log(err);
      alert(err);
    });
  }

}
