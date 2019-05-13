import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'iso-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){}
}
