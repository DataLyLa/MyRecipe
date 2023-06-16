import { Component, OnInit, Renderer2 } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  constructor(private categoryService: CategoryService, private router: Router, private renderer: Renderer2) { }

  strCategory: string = "";
  strCategoryThumb: string = "";
  category: any []= [];
  categoryList : any [] = [];


  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      response => {
        this.categoryList= response.categories;
      }
    )
  }

  goTORecepiesByCategories(category: string) {
    this.router.navigate(["categories", category]);
    this.scrollToTop();
  }

scrollToTop(): void {
  const element = document.documentElement || document.body;
  this.renderer.setProperty(element, 'scrollTop', 0);
}

}
