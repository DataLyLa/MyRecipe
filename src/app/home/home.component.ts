import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {


  recipes = [{
    id: 0,
    src: '../../assets/cake.jpeg',
    title: 'Rainbow cake',
    subtitle: 'try this recipe !',
  },
  {
    id: 1,
    src: '../../assets/grilled-meat.jpeg',
    title: 'Grilled meat',
    subtitle: 'try this recipe !',
  },
  {
    id: 2,
    src: '../../assets/pasta.jpeg',
    title: 'Pasta',
    subtitle: 'try this recipe !',
  }

  ]

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {

    // this.categoryService.getCategories().subscribe(

    //   response => {
    //     this.slides = response.categories;
    //   }

  }





}