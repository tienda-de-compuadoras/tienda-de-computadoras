import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComputersComponent } from './admin-computers/admin-computers.component';
import { AdminAccesoriesComponent } from './admin-accesories/admin-accesories.component';
import { AdminComponent } from './admin.component';
import { ComputerFormComponent } from './computer-form/computer-form.component';
import { AccessoryFormComponent } from './accessory-form/accessory-form.component';

@NgModule({
  declarations: [AdminComputersComponent, AdminAccesoriesComponent, AdminComponent, ComputerFormComponent, AccessoryFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AdminComputersComponent, AdminAccesoriesComponent, ComputerFormComponent, AccessoryFormComponent]
})
export class AdminModule { }
