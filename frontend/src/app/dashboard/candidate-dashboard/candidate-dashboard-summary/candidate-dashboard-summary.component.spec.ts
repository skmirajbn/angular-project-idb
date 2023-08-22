import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDashboardSummaryComponent } from './candidate-dashboard-summary.component';

describe('CandidateDashboardSummaryComponent', () => {
  let component: CandidateDashboardSummaryComponent;
  let fixture: ComponentFixture<CandidateDashboardSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateDashboardSummaryComponent]
    });
    fixture = TestBed.createComponent(CandidateDashboardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
