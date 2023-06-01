import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryPageComponent } from './category-page/category-page.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },

  { path: 'categories', component: CategoryPageComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
