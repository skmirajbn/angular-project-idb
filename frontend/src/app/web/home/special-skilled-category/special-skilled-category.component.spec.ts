import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialSkilledCategoryComponent } from './special-skilled-category.component';

describe('SpecialSkilledCategoryComponent', () => {
  let component: SpecialSkilledCategoryComponent;
  let fixture: ComponentFixture<SpecialSkilledCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialSkilledCategoryComponent]
    });
    fixture = TestBed.createComponent(SpecialSkilledCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
