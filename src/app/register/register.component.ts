import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { User } from './user';

@Component({
  selector: 'iso-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  name: string;
  lastName: string;
  city: string;
  email: string;
  password: string;
  constructor(private fb: FormBuilder, private router: Router,
              private authService: AuthService, private userService: UserService) {
    this.createForm();
  }

  ngOnInit() {}

  createForm(){
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  register() {
    this.userService.addUser(new User(this.name, this.lastName, this.city,
                                      this.email, this.password))
    this.authService.register(this.email, this.password);
  }
}
