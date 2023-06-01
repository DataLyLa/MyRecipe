import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = "https://www.themealdb.com/api/json/v1/1/";

  constructor(private http: HttpClient) { }

  getRecipesByCountry(country: string): Observable<any> {
    return this.http.get<any>(this.URL + `filter.php?a=${country}`);
  }

}
