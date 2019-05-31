import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CourseService {
  baseUrl = 'http://localhost:4000/courses';
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl);
  }
  deleteCourse(courseId: number) {
    return this.http.delete<Course>(this.baseUrl + '/' + courseId);
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, course);
  }
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(this.baseUrl + '/' + id);
  }
  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(this.baseUrl + '/' + course.id, course);
  }
}
