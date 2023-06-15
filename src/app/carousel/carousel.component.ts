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

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    let i = 0;
    while (i < 3) {
      this.apiService.getSingleRandomMeal().subscribe((response) => {
        this.mealsRandom.push(response.meals[0]);
        console.log('mealsRandom ' + this.mealsRandom[0]);

        // this.apiService.getSingleRandomMeal().subscribe((response) => {
        //   this.mealsRandomTwo.push(response.meals[0]);
        //   console.log('mealsRandomTwo = ' + this.mealsRandomTwo[0]);
        // });
      });
      i++;
    }
  }
  getRecipeById(idMeal: string): void {
    this.router.navigate(['meal', idMeal]);
  }
}
