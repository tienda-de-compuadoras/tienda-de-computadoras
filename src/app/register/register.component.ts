import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'iso-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  names: string;
  lastNames: string;
  city: string;
  email: string;
  password: string;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {}

  createForm(){
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  register() {
    this.authService.register(this.email, this.password);
  }
}
