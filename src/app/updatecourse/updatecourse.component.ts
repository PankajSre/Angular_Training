import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {
  editForm: FormGroup;
  course: any;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private courseService: CourseService) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: ['', Validators.required],
      courseName: [null, Validators.required],
      courseDuration: [null, Validators.required],
      courseEligibility: [null, Validators.required],
      courseFee: ['', Validators.required]
    });
    const id = localStorage.getItem('updatedCourseId');
    if (+id > 0) {
      this.courseService.getCourseById(+id).subscribe(
        data => {
          this.editForm.patchValue(data);
        }
      );
    }
  }
  getCourseById() {
    const id = localStorage.getItem('updatedCourseId');
    this.courseService.getCourseById(+id).subscribe(
      data => {
        this.course = data;
      }
    );
  }
  onSubmit() {
     this.submitted = true;
     if (this.editForm.invalid) {
       return;
     }
   this.courseService.updateCourse(this.editForm.value).subscribe(
     data => {
       console.log(this.editForm.value);
       this.router.navigate(['course']);
     },
     error => {
       alert(error);
     }
   );
  }

}
