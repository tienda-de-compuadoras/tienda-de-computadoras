import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComputersComponent } from './admin-computers/admin-computers.component';
import { AdminAccesoriesComponent } from './admin-accesories/admin-accesories.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
