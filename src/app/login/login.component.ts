import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'iso-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;  
  loginForm: FormGroup;
  loginFailed = false;
  registerFailed = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.createForm();
   }

  ngOnInit(){
    this.authService.resetLoginRegisterStatus();
    this.authService.getLoginStatus().subscribe(loginStatus => {
      this.loginFailed = loginStatus;
    });
    this.authService.getRegisterStatus().subscribe(registerStatus => {
      this.registerFailed = registerStatus;
    });
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
    this.authService.logIn(this.email, this.password);
  }
}
