import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  mealRandom = {};

  mealsRandom: Array<any> = [];
  mealsRandomTwo: Array<any> = [];

  idMeal: any = 0;
  index = 0;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    let j = 0;
    while (j < 3) {
      this.apiService.getSingleRandomMeal().subscribe((response) => {
        this.mealsRandom.push(response.meals[0]);
        console.log('mealsRandom ' + this.mealsRandom[0]);
      });
      j++;
    }
  }

  getRecipeById(idMeal: string): void {
    this.router.navigate(['meal', idMeal]);
  }
}
