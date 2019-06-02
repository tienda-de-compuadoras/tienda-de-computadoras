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

  addAccessory(accessory: any) {
    this.db.collection('accessories').add(accessory)
    .then(ref => {
      console.log('Accessry Added')
    });
  }
}
