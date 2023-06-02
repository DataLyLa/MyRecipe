import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldRecipesComponent } from './world-recipes.component';

describe('WorldRecipesComponent', () => {
  let component: WorldRecipesComponent;
  let fixture: ComponentFixture<WorldRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldRecipesComponent]
    });
    fixture = TestBed.createComponent(WorldRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
