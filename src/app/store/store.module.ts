import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreRoutingModule
  ],
  providers:[ProductsService]
})
export class StoreModule { }
