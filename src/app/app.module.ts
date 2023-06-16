import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { WorldRecipesComponent } from './world-recipes/world-recipes.component';
import { CardComponent } from './card/card.component';
import { AllRecipesByCountryComponent } from './all-recipes-by-country/all-recipes-by-country.component';
import { FeedbacksListComponent } from './feedbacks-list/feedbacks-list.component';
import { NewFeedbackComponent } from './new-feedback/new-feedback.component';
import { SingleFeedbackComponent } from './single-feedback/single-feedback.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { AllRecipesByCategoryComponent } from './all-recipes-by-category/all-recipes-by-category.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CategoryPageComponent,
    WorldRecipesComponent,
    CardComponent,
    AllRecipesByCountryComponent,
    CarouselComponent,
    AllRecipesByCategoryComponent,
    SingleRecipeComponent,
    FeedbacksListComponent,
    NewFeedbackComponent,
    SingleFeedbackComponent,
    ContactComponent,
    SearchComponent,
    FormSearchComponent,
    AllRecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
