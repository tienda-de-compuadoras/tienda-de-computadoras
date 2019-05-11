import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private db: AngularFirestore) { }

  getAdministrators() {
    return this.db.collection('administrators').valueChanges();
  }
}
