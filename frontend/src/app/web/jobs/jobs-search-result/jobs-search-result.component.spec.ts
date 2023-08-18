import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsSearchResultComponent } from './jobs-search-result.component';

describe('JobsSearchResultComponent', () => {
  let component: JobsSearchResultComponent;
  let fixture: ComponentFixture<JobsSearchResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsSearchResultComponent]
    });
    fixture = TestBed.createComponent(JobsSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
