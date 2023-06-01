import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });
  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '../../assets/cake.jpeg',
      title: 'Rainbow cake',
      subtitle: 'try this recipe !',
    };
    this.slides[1] = {
      id: 1,
      src: '../../assets/grilled-meat.jpeg',
      title: 'Grilled meat',
      subtitle: 'try this recipe !',
    };
    this.slides[2] = {
      id: 2,
      src: '../../assets/pasta.jpeg',
      title: 'Pasta',
      subtitle: 'try this recipe !',
    };
  }
}
