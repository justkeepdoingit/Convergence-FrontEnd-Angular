import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ])
    ]),
  ]
})
export class HomeComponent implements OnInit {

  newsFeed: boolean = true;
  notif: boolean = false;
  dropdownNotif: boolean = false;  

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.newsFeed = false;
  }
  showNotif(){
    if(!this.notif){
      this.notif = true;
      this.dropdownNotif = true;
    }
    else{
      this.notif = false;
      this.dropdownNotif = false;
    }
  }

  profileRouter(){
    this.router.navigate(['Profile'])
  }

}
