import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipesByCountryComponent } from './all-recipes-by-country.component';

describe('AllRecipesByCountryComponent', () => {
  let component: AllRecipesByCountryComponent;
  let fixture: ComponentFixture<AllRecipesByCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllRecipesByCountryComponent]
    });
    fixture = TestBed.createComponent(AllRecipesByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
