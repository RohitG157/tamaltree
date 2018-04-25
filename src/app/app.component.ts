import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isLoggedIn: boolean;
  constructor(private router: Router) {
  	this.checkUserLoggedIn();
  }

  checkUserLoggedIn() {
  	let loggedIn = localStorage.getItem('loggedIn');
  	if(loggedIn) {
  		this.isLoggedIn = true;
  		this.router.navigate(['home']);
  	} else {
  		this.isLoggedIn = false;
  		this.router.navigate(['login']);
  	}
  }
}
