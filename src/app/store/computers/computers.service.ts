import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ComputersService {

  constructor(private db: AngularFirestore) { }

  getComputers() {
    return this.db.collection('computers').valueChanges();
  }
}
