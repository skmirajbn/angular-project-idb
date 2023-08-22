import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerDashboardSummaryComponent } from './employeer-dashboard-summary.component';

describe('EmployeerDashboardSummaryComponent', () => {
  let component: EmployeerDashboardSummaryComponent;
  let fixture: ComponentFixture<EmployeerDashboardSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeerDashboardSummaryComponent]
    });
    fixture = TestBed.createComponent(EmployeerDashboardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
