import { Component, OnInit } from '@angular/core';
import { LandingPageComponent } from '../landing-page.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { passMatchValidator } from './passwordMatch.validator';
import { LandingLogicService } from '../landing-logic.service';
import { registerUser } from './register.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({opacity: 0}),
        animate(700, style({opacity: 1}))
      ])
    ]),
  ]
})
export class RegisterComponent implements OnInit {

  hidePass = true;
  hideConfPass = true;

  registerForm = new FormGroup({});

  constructor(private readonly landing: LandingPageComponent,
    private readonly router: Router, private form: FormBuilder, private landingService: LandingLogicService)
{    }


  ngOnInit(): void {
    this.router.navigate(['Landing-Page/Register'])
    this.landing.landingHidden = true;

    this.registerForm = this.form.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required],
    },{validator: [passMatchValidator]})
  }

  registerSubmit(user: registerUser, directives: FormGroupDirective){
    directives.resetForm();
    this.landingService.submitRegistration(user)
  }
}
