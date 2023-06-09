import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFeedbackComponent } from './single-feedback.component';

describe('SingleFeedbackComponent', () => {
  let component: SingleFeedbackComponent;
  let fixture: ComponentFixture<SingleFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleFeedbackComponent]
    });
    fixture = TestBed.createComponent(SingleFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
