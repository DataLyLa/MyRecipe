import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-recipes-by-category',
  templateUrl: './all-recipes-by-category.component.html',
  styleUrls: ['./all-recipes-by-category.component.scss']
})
export class AllRecipesByCategoryComponent {

  category: string = '';
  categoryList: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }


  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get("category")) {
        this.category = params.get('category') + "";
        this.apiService.getRecipesByCategory(this.category).subscribe(
          response => {
            this.categoryList = response.meals;
          }
        )

      }
    });

  }
  getRecipeById(idMeal: string): void {
    this.router.navigate(["meal", idMeal])
  };

}

