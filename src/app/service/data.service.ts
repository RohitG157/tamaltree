import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs/Subscription';
import { Router } from "@angular/router";

@Injectable()
export class DataService {
  
  constructor(
  	private database: AngularFireDatabase, 
  	public afAuth: AngularFireAuth, 
  	private route: Router
  	) { 
  }

  authenticate(loginData) {
  	this.afAuth.auth.signInWithEmailAndPassword(loginData.email, loginData.password)
  		.then(value => {
  			localStorage.setItem('loggedIn', 'true');
  			this.route.navigate(['admin/home']);
  		})
  		.catch(err => {
  			
  		});
  }

}
