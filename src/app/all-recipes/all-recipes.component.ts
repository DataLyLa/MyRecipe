import { Component, OnInit, Output, Renderer2 } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss'],
})
export class AllRecipesComponent implements OnInit {
  searchText: any;

  listOfMeal: any[] = [];
  listAllOfMeals: any[] = [];
  values = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  constructor(private apiService: ApiService, private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    if (!this.searchText) {
      for (let i = 0; i < this.values.length; i++) {
        this.apiService
          .getlistAllMealsByFirstLetter(this.values[i])
          .subscribe((response) => {
            this.listAllOfMeals.push(response.meals[0]);
          });
        console.log(this.listAllOfMeals);
      }
    }
  }
  onSearchTextEntered(searchValue: any) {
    this.searchText = searchValue;

    this.apiService
      .getSearchMealByName(this.searchText)
      .subscribe((response) => {
        this.listOfMeal = response.meals;
      });
  }

  getRecipeById(idMeal: string): void {
    this.router.navigate(['meal', idMeal]);
    this.scrollToTop();
  }

  scrollToTop(): void {
    const element = document.documentElement || document.body;
    this.renderer.setProperty(element, 'scrollTop', 0);
  }


}
