import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJobPostComponent } from './single-job-post.component';

describe('SingleJobPostComponent', () => {
  let component: SingleJobPostComponent;
  let fixture: ComponentFixture<SingleJobPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleJobPostComponent]
    });
    fixture = TestBed.createComponent(SingleJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
