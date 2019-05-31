import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  constructor(private courseService: CourseService, private router: Router, private formBuilder: FormBuilder) { }
  course: any;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: ['', Validators.required],
      courseName: ['', Validators.required],
      courseDuration: [null, Validators.required],
      courseEligibility: [null, Validators.required],
      courseFee: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.courseService.createCourse(this.addForm.value)
      .subscribe(data => {
        console.log(this.addForm.value);
        this.router.navigate(['course']);
      });
  }
}
