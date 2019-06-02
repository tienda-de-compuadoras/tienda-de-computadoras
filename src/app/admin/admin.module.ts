import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComputersComponent } from './admin-computers/admin-computers.component';
import { AdminAccesoriesComponent } from './admin-accesories/admin-accesories.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComputersComponent, AdminAccesoriesComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
