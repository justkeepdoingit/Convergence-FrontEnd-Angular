import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingPageComponent } from '../landing-page.component';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { registerUser } from '../register/register.model';
import { LandingLogicService } from '../landing-logic.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./log-in.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({opacity: 0}),
        animate(700, style({opacity: 1}))
      ])
    ]),
  ]
})
export class LogInComponent implements OnInit{
  loginForm: FormGroup = new FormGroup({});

  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
  constructor(private readonly landing: LandingPageComponent,
              private readonly router: Router, private form: FormBuilder,
              private readonly landingService: LandingLogicService,
              )
   {    }


  hide = true;
  ngOnInit(): void {
    this.router.navigate(['Landing-Page/Log-In'])
    this.landing.landingHidden = true;

    this.loginForm = this.form.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  submitLogin(data: registerUser, form: FormGroupDirective){
    return this.landingService.submitLogin(data);
  }
}
