import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() recipe =
    {
      id: 0,
      src: '',
      title: '',
      subtitle: '',
    }

  constructor() { }

  ngOnInit(): void { }

}
