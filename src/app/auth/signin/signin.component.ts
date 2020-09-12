import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  Username:string;
  Password:string;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(credentials:NgForm){
    console.log(credentials);
    console.log(this.Username+" "+this.Password);
    //call service method ,pass params 
    this.authService.signin(credentials).subscribe(result =>{
     alert("login successful")
     let user =result as User ;
     console.log(user);
     this.authService.saveUser(user);
      if(user.userTypeId === 2){
           ///navigate to admin dashboard 
           this.router.navigate(['/admin']);
      }
      else{
          // navigate to customerr home
          this.router.navigate(['/customer']);
      }
      console.log(result);
    },err => {
      //if fail
      // let er=err as  HttpErrorResponse;
      console.log(err);
      // alert(err.error.errorMessage);
      alert(JSON.stringify(err));

    });
  }

}
