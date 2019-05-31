import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { MyobservableComponent } from './myobservable/myobservable.component';
import { LanguagesComponent } from './languages/languages.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { CourseComponent } from './course/course.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user', component: UserComponent},
  { path: 'user/:id', component: UserComponent},
  { path: 'parent', component: ParentComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'observable', component: MyobservableComponent},
  { path: 'languages', component: LanguagesComponent},
  { path: 'angular-form', component: AngularFormComponent},
  { path: 'reactive-form', component: ReactiveFormComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'course', component: CourseComponent},
  { path: 'add-course', component: AddcourseComponent},
  { path: 'update-course', component: UpdatecourseComponent},
  { path: 'directives', component: DirectivesComponent},
  { path: '**', redirectTo: ''}// It must be in the last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
