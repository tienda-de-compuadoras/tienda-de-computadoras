import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputersService } from 'src/app/shared/computers.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'iso-admin-computers',
  templateUrl: './admin-computers.component.html',
  styleUrls: ['./admin-computers.component.css']
})
export class AdminComputersComponent implements OnInit {
  columns = ["Marca", "Modelo", "Cantidad", "Precio", "Editar", "Eliminar"];
  computers$: Observable<any[]>;
  
  constructor(private fb: FormBuilder, private computersService: ComputersService) {}

  ngOnInit(): void  {
    this.computers$ = this.computersService.getComputers();
  }
}
