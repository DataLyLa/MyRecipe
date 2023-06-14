import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FLAGS } from '../flags';


@Component({
  selector: 'app-world-recipes',
  templateUrl: './world-recipes.component.html',
  styleUrls: ['./world-recipes.component.scss']
})
export class WorldRecipesComponent implements OnInit {

  strArea: string = "";
  nationalityList: any[] = [];
  @Input() choice: string = "";
  showErrorMessage: boolean = false;
  flags = FLAGS;
  title = 'icon-flag';


  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getWorldRecipes().subscribe(
      response => {
        this.nationalityList = response.meals;

      }
    )
  }


  goTORecepiesByCountry(country: string) {
    if (this.choice && this.choice.trim() !== '') {
      this.router.navigate(["all-recipes", country])
    } else {
      this.showErrorMessage = true;
    }
  }

  getFlag(area: string) {
    for (let flag of this.flags) {
      if (area === flag.name) {
        return flag.emoji;
      }
    }
    return null;
  }

}
