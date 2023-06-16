import { Component, Renderer2 } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router, private renderer: Renderer2) { }


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
    this.router.navigate(["meal", idMeal]);
    this.scrollToTop();
  };

  scrollToTop(): void {
    const element = document.documentElement || document.body;
    this.renderer.setProperty(element, 'scrollTop', 0);
  }

}

