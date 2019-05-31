import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {
  @ViewChild('f') submittedForm: NgForm;
  defaultQuestion = 'pet';
  genders = ['Male', 'Female'];
  submitted = false;

  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };
  constructor() { }
  ngOnInit() {
  }
  // onSubmit(form: NgForm) {
  //  console.log(form);
  // }
  onSubmit() {
    // console.log(this.submittedForm);
    this.submitted = true;
    this.user.username = this.submittedForm.value.username;
    this.user.email = this.submittedForm.value.email;
    this.user.secret = this.submittedForm.value.secret;
    this.user.answer = this.submittedForm.value.answer;
    this.user.gender = this.submittedForm.value.gender;
  }
}
