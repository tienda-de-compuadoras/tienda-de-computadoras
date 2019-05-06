import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ProductsService {
  
  constructor(private db: AngularFirestore){}
  
  getComputers(){
    return this.db.collection('computers').valueChanges();
  }
}
