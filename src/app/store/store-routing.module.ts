import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import {ComputersComponent} from './computers/computers.component';
import {AccessoriesComponent} from './accessories/accessories.component';
import {HomeComponent} from './home/home.component';
import {HelpComponent} from './help/help.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'computers',
    pathMatch: 'full',
    component: StoreComponent
  },
  {
    path: 'computers',
    component: ComputersComponent
  },
  {
    path: 'accessories',
    component: AccessoriesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'help',
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
