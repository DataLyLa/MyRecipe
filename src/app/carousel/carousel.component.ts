import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  mealRandom = {};

  mealsRandom: Array<any> = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    let i = 0;
    while (i < 3) {
      this.apiService.getSingleRandomMeal().subscribe((response) => {
        this.mealsRandom.push(response.meals[0]);
      });
      i++;
    }
  }
}
