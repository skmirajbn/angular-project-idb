import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSpecialCategoryComponent } from './job-special-category.component';

describe('JobSpecialCategoryComponent', () => {
  let component: JobSpecialCategoryComponent;
  let fixture: ComponentFixture<JobSpecialCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobSpecialCategoryComponent]
    });
    fixture = TestBed.createComponent(JobSpecialCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
