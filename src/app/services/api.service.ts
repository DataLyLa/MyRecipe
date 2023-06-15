import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URL = 'https://www.themealdb.com/api/json/v1/1/';

  constructor(private http: HttpClient) {}

  getRecipesByCountry(country: string): Observable<any> {
    return this.http.get<any>(this.URL + `filter.php?a=${country}`);
  }
  // list all category
  //https://www.themealdb.com/api/json/v1/1/list.php?c=list
  getAllListCategory(): Observable<any> {
    return this.http.get<any>(this.URL + `list.php?c=list`);
  }
  // Search by strCategroy in recipes
  // Ex : https://www.themealdb.com/api/json/v1/1/search.php?s=goat
  getRecipesByStrCategory(strCategory: string): Observable<any> {
    return this.http.get<any>(this.URL + `filter.php?c=${strCategory}`);
  }

  // Search meal by name
  // Ex: www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
  getSearchMealByName(strMeal: string): Observable<any> {
    return this.http.get<any>(this.URL + `search.php?s=${strMeal}`);
  }

  getRecipesByCategory(category: string): Observable<any> {
    return this.http.get<any>(this.URL + `filter.php?c=${category}`);
  }

  getRecipes(category: string): Observable<any> {
    return this.http.get<any>(this.URL + `filter.php?c=${category}`);
  }

  getRecipeById(idMeal: string): Observable<any> {
    return this.http.get<any>(this.URL + `lookup.php?i=${idMeal}`);
  }

  // Lookup a single random meal
  // www.themealdb.com/api/json/v1/1/random.php
  getSingleRandomMeal(): Observable<any> {
    return this.http.get<any>(this.URL + `random.php`);
  }

  //     List all meals by first letter
  // www.themealdb.com/api/json/v1/1/search.php?f=a
  getlistAllMealsByFirstLetter(letter: any): Observable<any> {
    return this.http.get<any>(this.URL + `search.php?f=${letter}`);
  }
}
