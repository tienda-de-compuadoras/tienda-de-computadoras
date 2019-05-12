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

  addRegistroDeCompra(computadora){
    let hoy = new Date()
    this.db.collection('registros-de-compra').add({
      brand: computadora.brand,
      model: computadora.model,
      date: hoy.getFullYear() + '/' + (hoy.getMonth()+1) + '/' + hoy.getDate() + '-' + hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds(),
      id: computadora.id
    });
    console.log("registo en db "+ computadora.brand + " " + computadora.model );
    console.log(computadora);
  }
}
