import { Component, Input, OnInit, Output } from '@angular/core';
import { Feedbacks } from '../models/feedbacks.models';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-single-feedback',
  templateUrl: './single-feedback.component.html',
  styleUrls: ['./single-feedback.component.scss']
})
export class SingleFeedbackComponent implements OnInit{
  @Input() feedback!: Feedbacks
  @Input()idMeal: string =''
  
  rating!: number
  @Input() showOnFeedback: boolean = true
  stars: number[] = [ 1, 2, 3,4, 5];

  constructor(
    private apiService: ApiService,
    private router : Router
  ){}
  ngOnInit(): void {
      this.rating = Number(this.feedback.rating)
      console.log(this.rating)
      this.idMeal= this.feedback.idMeal
      
  }

  onClickToRecipe(idMeal: string): void {
      this.router.navigate(["meal", idMeal])
  }
}
