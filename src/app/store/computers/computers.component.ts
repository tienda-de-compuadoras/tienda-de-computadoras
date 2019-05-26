import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { ComputersService } from 'src/app/shared/computers.service';

@Component({
  selector: 'iso-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {
  computers$: Observable<any[]>;
  constructor(private computersService: ComputersService) { }

  ngOnInit(): void  {
    this.computers$ = this.computersService.getComputers();
  }

}
