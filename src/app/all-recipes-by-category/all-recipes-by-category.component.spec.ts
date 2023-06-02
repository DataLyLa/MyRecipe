import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipesByCategoryComponent } from './all-recipes-by-category.component';

describe('AllRecipesByCategoryComponent', () => {
  let component: AllRecipesByCategoryComponent;
  let fixture: ComponentFixture<AllRecipesByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllRecipesByCategoryComponent]
    });
    fixture = TestBed.createComponent(AllRecipesByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
