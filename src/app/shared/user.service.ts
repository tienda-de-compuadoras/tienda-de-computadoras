import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { User } from '../register/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$: AngularFirestoreCollection<User>;
  constructor(private db: AngularFirestore) {
    this.users$ = this.db.collection<User>('users');
  }

  addUser(user: User) {
    this.users$.add(user);
  }
}
