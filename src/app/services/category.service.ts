import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  URL = 'https://www.themealdb.com/api/json/v1/1/';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>(this.URL + "categories.php");
  }

  getWorldRecipes(): Observable<any> {
    return this.http.get<any>(this.URL + "list.php?a=list");


    // getWorldRecipesNat(nat: string): Observable < any > {
    //   return this.http.get<any>(this.URL + "list.php?a="$nat);

  }

}