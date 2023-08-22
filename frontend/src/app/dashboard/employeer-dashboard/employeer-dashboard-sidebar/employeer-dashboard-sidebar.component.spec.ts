import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerDashboardSidebarComponent } from './employeer-dashboard-sidebar.component';

describe('EmployeerDashboardSidebarComponent', () => {
  let component: EmployeerDashboardSidebarComponent;
  let fixture: ComponentFixture<EmployeerDashboardSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeerDashboardSidebarComponent]
    });
    fixture = TestBed.createComponent(EmployeerDashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
