import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

  constructor(private db: AngularFirestore) { }

  getAccessories() {
    return this.db.collection('accessories').valueChanges();
  }
}
