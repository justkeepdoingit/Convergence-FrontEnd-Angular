import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { loginUser } from './log-in/log-in.model';
import { registerUser } from './register/register.model';
import { secretResponseMessage } from './register/secretResponse';
@Injectable({
  providedIn: 'root'
})
export class LandingLogicService {

  constructor(private router: Router, private http: HttpClient, private readonly cookie: CookieService) { }

  submitRegistration(data: registerUser){

    return this.http.post('http://localhost:3000/register/registerAccount', {
      name: data.name,
      username: data.username,
      password: data.password
    },{withCredentials: true}).subscribe((data)=>{
      if(data == secretResponseMessage){
        alert("Registration Success!");
      }
    }, error=>{
      console.log(error);
    })
  }

  submitLogin(data: loginUser){
    this.http.post('http://localhost:3000/register/loginAccount', {
      username: data.username,
      password: data.password
    }, {withCredentials: true}).subscribe((data)=>{
      this.router.navigate(['Home'])
    })
  }

  //Check Active User
  cookies = this.cookie.get('_Security_');
  checkUser(){
    if(this.cookies != ''){
      this.router.navigate(['Home']);
    }
  }

  

  test(){
    this.http.get('http://localhost:3000/test', {withCredentials:true}).subscribe(data=>{
      console.log(data);
    }, err=>{
      console.log(err);
    })
  }
}
