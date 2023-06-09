import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.component.html',
  styleUrls: ['./new-feedback.component.scss']
})
export class NewFeedbackComponent implements OnInit {
  @Input()idMeal: string = '';
  userFirstname!: string;
  userLastname!: string;
  comment!: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitFeedback(): void {
   
    console.log('idMeal:', this.idMeal);
    console.log('User Firstname:', this.userFirstname);
    console.log('User Lastname:', this.userLastname);
    console.log('Comment:', this.comment);

    // Reset the form fields
    this.userFirstname = '';
    this.userLastname = '';
    this.comment = '';
  }
}
