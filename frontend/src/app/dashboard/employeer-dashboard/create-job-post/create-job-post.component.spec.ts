import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobPostComponent } from './create-job-post.component';

describe('CreateJobPostComponent', () => {
  let component: CreateJobPostComponent;
  let fixture: ComponentFixture<CreateJobPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateJobPostComponent]
    });
    fixture = TestBed.createComponent(CreateJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
