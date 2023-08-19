import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerCreateAccountComponent } from './employeer-create-account.component';

describe('EmployeerCreateAccountComponent', () => {
  let component: EmployeerCreateAccountComponent;
  let fixture: ComponentFixture<EmployeerCreateAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeerCreateAccountComponent]
    });
    fixture = TestBed.createComponent(EmployeerCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
