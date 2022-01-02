import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { LandingLogicService } from './landing-logic.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('fadeUp', [
      transition('void => *', [
        style({opacity: 0, transform: 'translateY(-20%)'}),
        animate(700, style({opacity: 1, transform: 'translateY(0%)'}))
      ])
    ]),
    trigger('fadeSlideRight', [
      transition('void => *', [
        style({opacity: 0, transform: 'translateX(-3%)'}),
        animate('700ms 700ms', style({opacity: 1, transform: 'translateX(0%)'}))
      ])
    ]),
  ]
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router, private landing: LandingLogicService) { }

  landingHidden: boolean = false;

  ngOnInit(): void {
    this.landing.checkUser();
  }


  hiddenNav = 'right';

  

  returnLanding(){
    this.landingHidden = false;
    this.router.navigate(['/Landing-Page']);
  }

  showNav(){
    const nav = this.hiddenNav;
    if(nav == 'right'){
      this.hiddenNav = 'rightActive'
    }
    else{
      this.hiddenNav = 'right'
    }
  }
}
