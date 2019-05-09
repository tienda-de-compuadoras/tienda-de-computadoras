import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
  selector: 'iso-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  computers$: Observable<any[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void  {
    this.computers$ = this.productsService.getComputers();
  }

}
