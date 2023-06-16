import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksListComponent } from './feedbacks-list.component';

describe('FeedbacksListComponent', () => {
  let component: FeedbacksListComponent;
  let fixture: ComponentFixture<FeedbacksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbacksListComponent]
    });
    fixture = TestBed.createComponent(FeedbacksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
