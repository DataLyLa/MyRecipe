import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  imgURL = '../../assets/courier.png';
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.max(50)]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.min(3)]],
    });
  }
  get f() {
    return this.contactForm.controls;
  }
  onSubmit() {
    this.submitted = true;
  }
}
