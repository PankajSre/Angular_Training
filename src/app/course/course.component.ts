import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[];
  course: any = {};
  constructor(private courseService: CourseService, private router: Router) { }

  deleteCourse(course: Course): void {
    this.courseService.deleteCourse(course.id).subscribe();
    this.courses = this.courses.filter(c => c !== course);
  }
  addCourse() {
    this.router.navigate(['add-course']);
  }
  updateCourse(course: Course) {
    localStorage.removeItem('updatedCourseId');
    localStorage.setItem('updatedCourseId', course.id.toString());
    this.router.navigate(['update-course']);
  }
  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

}
