import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCvComponent } from './candidate-cv.component';

describe('CandidateCvComponent', () => {
  let component: CandidateCvComponent;
  let fixture: ComponentFixture<CandidateCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateCvComponent]
    });
    fixture = TestBed.createComponent(CandidateCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
