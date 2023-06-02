import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Ingredients } from '../models/ingredients.model';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.scss']
})
export class SingleRecipeComponent implements OnInit {

  idMeal: string = "";
  meal: any = {};
  ingredients!: Ingredients[]

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

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


  }
}
