import { Component, Input, OnInit } from '@angular/core';
import { Feedbacks } from '../models/feedbacks.models';


@Component({
  selector: 'app-single-feedback',
  templateUrl: './single-feedback.component.html',
  styleUrls: ['./single-feedback.component.scss']
})
export class SingleFeedbackComponent{
  @Input() feedback!: Feedbacks
  @Input()idMeal: string =''
}
