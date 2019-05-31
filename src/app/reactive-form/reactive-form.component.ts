import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['Male', 'Female'];
  submittedForm: FormGroup;
  forbiddenUsernames = ['Pankaj', 'Rakesh'];
  submitted = false;
  constructor() { }
  text = 'Login Page';
  ngOnInit() {
    this.submittedForm = new FormGroup({
      userData: new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('Male', Validators.required)
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.submittedForm);
  }

  forbiddenNames(control: FormControl) {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }
}
