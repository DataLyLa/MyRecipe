import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { WorldRecipesComponent } from './world-recipes/world-recipes.component';
import { AllRecipesByCountryComponent } from './all-recipes-by-country/all-recipes-by-country.component';
import { AllRecipesByCategoryComponent } from './all-recipes-by-category/all-recipes-by-category.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },

  { path: 'categories', component: CategoryPageComponent },

  { path: 'all-recipes', component: WorldRecipesComponent },

  { path: 'all-recipes/:country', component: AllRecipesByCountryComponent },

  { path: 'categories/:category', component: AllRecipesByCategoryComponent },

  { path: 'meal/:idMeal', component: SingleRecipeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
