import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeerJobPostComponent } from './all-employeer-job-post.component';

describe('AllEmployeerJobPostComponent', () => {
  let component: AllEmployeerJobPostComponent;
  let fixture: ComponentFixture<AllEmployeerJobPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllEmployeerJobPostComponent]
    });
    fixture = TestBed.createComponent(AllEmployeerJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
