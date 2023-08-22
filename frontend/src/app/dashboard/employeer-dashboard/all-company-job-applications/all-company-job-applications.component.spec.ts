import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCompanyJobApplicationsComponent } from './all-company-job-applications.component';

describe('AllCompanyJobApplicationsComponent', () => {
  let component: AllCompanyJobApplicationsComponent;
  let fixture: ComponentFixture<AllCompanyJobApplicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCompanyJobApplicationsComponent]
    });
    fixture = TestBed.createComponent(AllCompanyJobApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
