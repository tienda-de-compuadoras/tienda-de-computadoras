import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputersService } from '../shared/computers.service';

@Component({
  selector: 'iso-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  computers$: Observable<any[]>;

  constructor(private computersService: ComputersService) { }

  ngOnInit(): void  {
    this.computers$ = this.computersService.getComputers();
  }

}
