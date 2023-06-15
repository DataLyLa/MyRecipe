import { Component, OnInit, Input } from '@angular/core';
import { FeedbacksService } from '../services/feedbacks.service';
import { Observable } from 'rxjs';
import { Feedbacks } from '../models/feedbacks.models';

@Component({
  selector: 'app-feedbacks-list',
  templateUrl: './feedbacks-list.component.html',
  styleUrls: ['./feedbacks-list.component.scss']
})
export class FeedbacksListComponent implements OnInit{
  @Input() idMeal!: string
  @Input() showOnFeedback!: boolean
  feedbacks$!: Observable<Feedbacks[]>

  constructor(private feedbacksService: FeedbacksService){}

  ngOnInit(): void {
      
      if(this.idMeal){
        this.feedbacks$ = this.feedbacksService.getFeedbacksByIdMeal(this.idMeal)
      } else {
      this.feedbacks$ =
      this.feedbacksService.getAllFeedbacks()
      this.showOnFeedback = this.showOnFeedback = true
    }
  }
  
}
