import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerDashboardComponent } from './employeer-dashboard.component';

describe('EmployeerDashboardComponent', () => {
  let component: EmployeerDashboardComponent;
  let fixture: ComponentFixture<EmployeerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeerDashboardComponent]
    });
    fixture = TestBed.createComponent(EmployeerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
