import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { ComputersComponent } from './computers/computers.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [StoreComponent, ComputersComponent, AccessoriesComponent, HomeComponent, HelpComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreRoutingModule
  ],
  providers: [ProductsService]
})
export class StoreModule { }
