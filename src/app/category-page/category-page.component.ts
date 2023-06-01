import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

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

}
