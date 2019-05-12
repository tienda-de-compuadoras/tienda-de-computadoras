import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessoriesService } from './accessories.service';

@Component({
  selector: 'iso-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  accessories$: Observable<any[]>;
  constructor(private accessoriesService: AccessoriesService) { }

  ngOnInit(): void  {
    this.accessories$ = this.accessoriesService.getAccessories();
  }

}
