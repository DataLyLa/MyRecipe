import { Component, Input, OnInit } from '@angular/core';
import { FeedbacksService } from '../services/feedbacks.service';

@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.component.html',
  styleUrls: ['./new-feedback.component.scss']
})
export class NewFeedbackComponent implements OnInit {

  @Input() idMeal: string = '';
  @Input() strMeal: string = ''
  userFirstname!: string;
  userLastname!: string;
  comment!: string;
  rating!: number

  constructor(private feedbacksService: FeedbacksService) { }

  ngOnInit(): void {
    this.idMeal= this.idMeal
    this.strMeal= this.strMeal
    console.log("titre recette"+this.strMeal +this.idMeal)
  }

  submitFeedback(): void {
    this.feedbacksService.postFeedback({
      id: 0,
      idMeal: this.idMeal,
      strMeal: this.strMeal,
      userFirstname: this.userFirstname,
      userLastname: this.userLastname,
      comment: this.comment,
      rating: this.rating
    }).subscribe((res) => {
      console.log(res, "blzrkfkls");
      // Recharge la page pour afficher l'avis posté
      location.reload();
    },
    (error) => {
      console.log("erreur", error);
    });
      
      this.userFirstname = '';
      this.userLastname = '';
      this.comment = '';
      this.rating = 0;
    
  }
}

