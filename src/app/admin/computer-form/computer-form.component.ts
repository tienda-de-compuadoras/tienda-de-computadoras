import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComputersService } from 'src/app/shared/computers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'iso-computer-form',
  templateUrl: './computer-form.component.html',
  styleUrls: ['./computer-form.component.css']
})
export class ComputerFormComponent implements OnInit {
  brand: string;
  model: string;  
  processor: string;
  storage: string;
  ram: number;
  graphics: string;
  image: string;
  os: string;
  screenType: string;
  screenSize: number;
  touchScreen: string;
  weight: number;
  bluetooth: string;
  headphoneJack: string;
  portsTypeA: number;
  portsTypeC: number;
  price: number;
  stock: number;
  computerForm: FormGroup;
  constructor(private fb: FormBuilder, private computersService: ComputersService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.computerForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      processor: ['', Validators.required],
      storage: ['', Validators.required],
      ram: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      graphics: ['', Validators.required],
      image: ['', Validators.required],
      os: ['', Validators.required],
      screenType: ['', Validators.required],
      screenSize: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      touchScreen: ['', Validators.required],
      weight: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      bluetooth: ['', Validators.required],
      headphoneJack: ['', Validators.required],
      portsTypeA: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      portsTypeC: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      stock: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  addComputer() {
    this.computersService.addComputer({brand: this.brand, model: this.brand, processor: this.processor,
    storage: this.processor, ram: this.ram, graphics: this.graphics, image: this.image, os: this.os, screenType: this.screenType,
    screenSize: this.screenSize, weight: this.weight, bluetooth: this.bluetooth, headphoneJack: this.headphoneJack, touchScreen: this.touchScreen,
    portsTypeA: this.portsTypeA, portsTypeC: this.portsTypeC, price: this.price, id: this.brand + this.model, stars: 0, stock: this.stock});
  }
}
