import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  ingredients: any[] = []; // Déclarez un tableau pour stocker les ingrédients
  tags: any[] = [];
  measures: any[] = []; // Déclarez un tableau pour stocker les mesures
  key: string[] = [];
  ingredientsMeasures: Ingredient []= [];



  // Supposez que vous avez déjà récupéré les données de l'API
  recipeData: Record<string, string> = {
    strIngredient1: "soy sauce",
    strIngredient2: "water",
    strIngredient3: "brown sugar",
    // ...
    strMeasure1: "3/4 cup",
    strMeasure2: "1/2 cup",
    strMeasure3: "1/4 cup",
    // ...
  };
  router: any;


  constructor(private route: ActivatedRoute, private apiService: ApiService, private feedbacksService: FeedbacksService) { }


  @ViewChild('instructionsContainer', { static: true }) instructionsContainer!: ElementRef<any>;


  ngOnInit(): void {

   

    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get("idMeal")) {
        this.idMeal = params.get('idMeal') + "";
        this.apiService.getRecipeById(this.idMeal).subscribe(
          response => {
            this.meal = response.meals[0];
            console.log(JSON.stringify(this.meal));

            Object.keys(this.meal).forEach(key => {
              if (key.startsWith('strIngredient') && this.meal[key]) {
                this.ingredients.push(this.meal[key]);
              } else if (key.startsWith('strMeasure') && this.meal[key]) {
                this.measures.push(this.meal[key]);
    
              }
            }); 

            for(let i=0; i<this.ingredients.length; i++) {
              let ingredientsMeasures: Ingredient = {
                name: this.ingredients[i],
                measure: this.measures[i]
              }
              this.ingredientsMeasures.push(ingredientsMeasures);

            }

          }
        )

      }
    }
    )
   this.feedbacks$=this.feedbacksService.getFeedbacksByIdMeal(this.idMeal)


    // Supposons que vous avez déjà récupéré les instructions depuis votre API
    const instructions = "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!";

    // Divisez les instructions en utilisant les séparateurs "\r\n"
    const instructionArray = instructions.split("\r\n");

    // Affichez les instructions dans votre HTML
    const instructionsContainer = document.getElementById("instructions-container");

    instructionArray.forEach(instruction => {
      const paragraph = document.createElement("p");
      paragraph.textContent = instruction;
      this.instructionsContainer.nativeElement.appendChild(paragraph);

    });

  }

  convertToEmbedLink(url: string): string {
    const videoId = this.extractVideoId(url);
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return '';
  }
  
  extractVideoId(url: string): string | null {
    const regex = /[?&]v=([^&#]*)/;   
     const match = url.match(regex);
    if (match) {
      return match[1];
    }
    return null;
  }

}



export interface Ingredient {
  name: string;
  measure: string;
}