import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessoriesService } from 'src/app/shared/accessories.service';

@Component({
  selector: 'iso-admin-accesories',
  templateUrl: './admin-accesories.component.html',
  styleUrls: ['./admin-accesories.component.css']
})
export class AdminAccesoriesComponent implements OnInit {
  columns = ["Marca", "Modelo", "Nombre Producto","Cantidad", "Precio", "Editar", "Eliminar"];
  accesories$: Observable<any[]>;
  constructor(private accesoriesService: AccessoriesService) { }

  ngOnInit(): void  {
    this.accesories$ = this.accesoriesService.getAccessories();
  }

}
