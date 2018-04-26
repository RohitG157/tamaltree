import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  // email: string = "";
  // password: string = "";	
  constructor(private frmbuilder: FormBuilder, public dataService: DataService) { 
  	this.loginForm = frmbuilder.group({
  		email: ['', Validators.compose([Validators.required])],
  		password: ['', Validators.compose([Validators.required])]
  	});
  }

  ngOnInit() {
  	
  }

  authenticate(loginForm: NgForm) {
  	if(loginForm.valid) {
  		let isValidate = this.dataService.authenticate(loginForm.value);
  		console.log("User "+ isValidate);
  	}
  }

}
