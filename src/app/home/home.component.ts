import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  categoriesList: any[] = [];
  strCategory: string = '';
  recipesRandom: Array<any> = [];
  RecipesByStrCategories = <any>{};

  constructor(
    private categoryService: CategoryService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categoriesList = response.categories;

      this.strCategory =
        this.categoriesList[
          Math.floor(Math.random() * this.categoriesList.length)
        ].strCategory;

      this.apiService
        .getRecipesByStrCategory(this.strCategory)
        .subscribe((response) => {
          for (let i = 0; i < 6; i++) {
            this.recipesRandom.push(
              response.meals.pop(
                Math.floor(Math.random() * this.recipesRandom.length)
              )
            );
          }
        });
    });
  }
}
