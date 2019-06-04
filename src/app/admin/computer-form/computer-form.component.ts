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
  computerForm: FormGroup;
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

  constructor(private fb: FormBuilder, private computersService: ComputersService) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.computerForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      processor: ['', Validators.required],
      storage: ['', Validators.required],
      ram: ['', [Validators.required, Validators.maxLength(2)]],
      graphics: ['', Validators.required],
      image: ['', Validators.required],
      os: ['', Validators.required],
      screenType: ['', Validators.required],
      screenSize: ['', [Validators.required, Validators.maxLength(5)]],
      touchScreen: ['', [Validators.required, Validators.maxLength(2)]],
      weight: ['', [Validators.required, Validators.maxLength(5)]],
      bluetooth: ['', [Validators.required, Validators.maxLength(2)]],
      headphoneJack: ['',[Validators.required, Validators.maxLength(2)]],
      portsTypeA: ['', [Validators.required, Validators.maxLength(1)]],
      portsTypeC: ['', [Validators.required, Validators.maxLength(1)]],
      price: ['', [Validators.required, Validators.maxLength(7)]],
      stock: ['', [Validators.required, Validators.maxLength(2)]]
    });
  }

  addComputer() {
    this.computersService.addComputer({brand: this.brand, model: this.brand, processor: this.processor,
    storage: this.processor, ram: this.ram, graphics: this.graphics, image: this.image, os: this.os, screenType: this.screenType,
    screenSize: this.screenSize, weight: this.weight, bluetooth: this.bluetooth, headphoneJack: this.headphoneJack, touchScreen: this.touchScreen,
    portsTypeA: this.portsTypeA, portsTypeC: this.portsTypeC, price: this.price, id: this.brand + this.model, stars: 0, stock: this.stock});
  }
}
