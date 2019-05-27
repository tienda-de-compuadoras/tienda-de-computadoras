import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { first, take, switchMap } from 'rxjs/operators';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {user: User;
  loginFailed = new BehaviorSubject<boolean>(false);
  registerFailed = new BehaviorSubject<boolean>(false);
  userLoggedOut = new BehaviorSubject<boolean>(false);

  constructor(
    private angularFire: AngularFireAuth,
    private router: Router
  ) {
    angularFire.authState.subscribe(user => {
      this.user = user;
    });
  }

  logIn(email: string, password: string) {
    this.angularFire.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['store/computers']);
      })
      .catch(err => {
        this.loginFailed.next(true);
      });
  }

  signUp(email: string, password: string) {
    this.angularFire.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['login']);
      })
      .catch(err => {
        this.registerFailed.next(true);

      });
  }

  logOut() {
    this.angularFire.auth.signOut()
      .then(() => {
        this.userLoggedOut.next(true);
        this.router.navigate(['store/computers']);
      });
  }

  getUserLoggedOutStatus(): Observable<boolean> {
    return this.userLoggedOut.asObservable();
  }

  getLoginStatus(): Observable<boolean> {
    return this.loginFailed.asObservable();
  }

  getRegisterStatus(): Observable<boolean> {
    return this.registerFailed.asObservable();
  }

  resetLoginRegisterStatus() {
    this.loginFailed.next(false);
    this.registerFailed.next(false);
    this.userLoggedOut.next(false);
  }
}
