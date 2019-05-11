import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'iso-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  administrators$: Observable<any[]>;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void  {
    this.administrators$ = this.loginService.getAdministrators();
  }

}
