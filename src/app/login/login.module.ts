import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthService } from '../shared/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule implements OnInit{
  email: string;
  password: string;

  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
