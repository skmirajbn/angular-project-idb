import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCreateAccountComponent } from './candidate-create-account.component';

describe('CandidateCreateAccountComponent', () => {
  let component: CandidateCreateAccountComponent;
  let fixture: ComponentFixture<CandidateCreateAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateCreateAccountComponent]
    });
    fixture = TestBed.createComponent(CandidateCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
