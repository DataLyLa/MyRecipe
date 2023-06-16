import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss'],
})
export class AllRecipesComponent {
  searchText: any;

  listOfMeal: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  onSearchTextEntered(searchValue: any) {
    this.searchText = searchValue;
    console.log(this.searchText);

    this.apiService
      .getSearchMealByName(this.searchText)
      .subscribe((response) => {
        this.listOfMeal = response.meals;
      });
  }

  getRecipeById(idMeal: string): void {
    this.router.navigate(['meal', idMeal]);
  }
}
