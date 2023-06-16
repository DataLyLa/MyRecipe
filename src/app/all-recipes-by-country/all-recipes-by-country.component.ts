import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-recipes-by-country',
  templateUrl: './all-recipes-by-country.component.html',
  styleUrls: ['./all-recipes-by-country.component.scss'],
})
export class AllRecipesByCountryComponent implements OnInit {
  country: string = '';
  countryList: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router : Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('country')) {
        this.country = params.get('country') + '';
        this.apiService
          .getRecipesByCountry(this.country)
          .subscribe((response) => {
            this.countryList = response.meals;

            console.log(this.country);
          });
      }
    });
  }
  getRecipeById(idMeal: string): void {
    this.router.navigate(["meal", idMeal])
  };

}
