import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from 'src/app/shared/accessories.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'iso-accessory-form',
  templateUrl: './accessory-form.component.html',
  styleUrls: ['./accessory-form.component.css']
})
export class AccessoryFormComponent implements OnInit {
  brand: string;
  model: string;  
  productName: string;
  color: string;
  image: string;
  productWeight: number;
  wireless: string;
  price: number;
  stars: number;
  stock: number;
  accessoryForm: FormGroup;

  constructor(private fb: FormBuilder, private accessoryService: AccessoriesService) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.accessoryForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      productName: ['', Validators.required],
      color: ['', Validators.required],
      image: ['', Validators.required],
      productWeight: ['', [Validators.required, Validators.maxLength(5)]],
      wireless: ['',[Validators.required, Validators.maxLength(2)]],
      price: ['', [Validators.required, Validators.maxLength(7)]],
      stock: ['', [Validators.required, Validators.maxLength(2)]]
    });
  }

  addAccessory() {
    this.accessoryService.addAccessory({brand: this.brand, model: this.brand, productName: this.productName,
    productWeight: this.productWeight, color: this.color, image: this.image, wireless: this.wireless, price: this.price, id: this.brand + this.productName, stars: 0, stock: this.stock});
  }

}
