import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Ingredients } from '../models/ingredients.model';
import { Observable } from 'rxjs';
import { Feedbacks } from '../models/feedbacks.models';
import { FeedbacksService } from '../services/feedbacks.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.scss']
})
export class SingleRecipeComponent implements OnInit {
  feedbacks$!: Observable<Feedbacks[]>
  idMeal: string = "";
  meal: any = {};
  ingredients!: Ingredients[]

  constructor(private route: ActivatedRoute, private apiService: ApiService, private feedbacksService: FeedbacksService) { }

  ngOnInit(): void {

   

    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get("idMeal")) {
        this.idMeal = params.get('idMeal') + "";
        this.apiService.getRecipeById(this.idMeal).subscribe(
          response => {
            this.meal = response.meals[0];
            console.log(JSON.stringify(this.meal));
          }
        )

      }
    }
    )
   this.feedbacks$=this.feedbacksService.getFeedbacksByIdMeal(this.idMeal)

  }
}
