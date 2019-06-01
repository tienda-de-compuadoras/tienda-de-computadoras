import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComputersComponent } from './admin-computers.component';

describe('AdminComputersComponent', () => {
  let component: AdminComputersComponent;
  let fixture: ComponentFixture<AdminComputersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComputersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
