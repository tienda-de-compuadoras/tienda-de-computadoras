import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComputersComponent } from './admin-computers/admin-computers.component';
import { AdminAccesoriesComponent } from './admin-accesories/admin-accesories.component';

@NgModule({
  declarations: [AdminComputersComponent, AdminAccesoriesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
