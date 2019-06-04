import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComputersComponent } from './admin-computers/admin-computers.component';
import { AdminAccesoriesComponent } from './admin-accesories/admin-accesories.component';
import { ComputerFormComponent } from './computer-form/computer-form.component';
import { AccessoryFormComponent } from './accessory-form/accessory-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adminComputers',
    pathMatch: 'full',
    component: AdminComputersComponent
  },
  {
    path: 'adminComputers',
    component: AdminComputersComponent
  },
  {
    path: 'adminAccessories',
    component: AdminAccesoriesComponent
  },
  {
    path: 'addComputer',
    component: ComputerFormComponent
  },
  {
    path: 'addAccessory',
    component: AccessoryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
