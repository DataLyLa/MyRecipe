import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-world-recipes',
  templateUrl: './world-recipes.component.html',
  styleUrls: ['./world-recipes.component.scss']
})
export class WorldRecipesComponent implements OnInit {

  strArea: string = "";
  nationalityList: any[] = [];


  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getWorldRecipes().subscribe(
      response => {
        this.nationalityList = response.meals;

      }
    )
  }

  goTORecepiesByCountry(country: string) {
    this.router.navigate(["all-recipes", country])
  }



}
