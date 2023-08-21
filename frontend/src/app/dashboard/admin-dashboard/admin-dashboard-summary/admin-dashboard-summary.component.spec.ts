import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardSummaryComponent } from './admin-dashboard-summary.component';

describe('AdminDashboardSummaryComponent', () => {
  let component: AdminDashboardSummaryComponent;
  let fixture: ComponentFixture<AdminDashboardSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashboardSummaryComponent]
    });
    fixture = TestBed.createComponent(AdminDashboardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
