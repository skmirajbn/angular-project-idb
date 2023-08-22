import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDashboardSidebarComponent } from './candidate-dashboard-sidebar.component';

describe('CandidateDashboardSidebarComponent', () => {
  let component: CandidateDashboardSidebarComponent;
  let fixture: ComponentFixture<CandidateDashboardSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateDashboardSidebarComponent]
    });
    fixture = TestBed.createComponent(CandidateDashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
