import { Router } from '@angular/router';
import { Component, Renderer2 } from '@angular/core';
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
    private apiService: ApiService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    let i = 0;
    while (i < 6) {
      this.categoryService.getCategories().subscribe((response) => {
        this.categoriesList = response.categories;

        this.strCategory =
          this.categoriesList[
            Math.floor(Math.random() * this.categoriesList.length)
          ].strCategory;
        console.log(this.strCategory);

        this.apiService
          .getRecipesByStrCategory(this.strCategory)
          .subscribe((response) => {
            // for (let i = 0; i < 6; i++) {
            this.recipesRandom.push(
              response.meals.pop(
                Math.floor(Math.random() * this.recipesRandom.length)
              )
            );
            // }
            console.log(this.recipesRandom);
          });
      });
      i++;
    }
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
