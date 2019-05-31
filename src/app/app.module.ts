import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { MyobservableComponent } from './myobservable/myobservable.component';
import { LanguagesComponent } from './languages/languages.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './course.service';
import { CourseComponent } from './course/course.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { DirectivesComponent } from './directives/directives.component';
import { RedDirective } from './red.directive';
import { NotIfDirective } from './not-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ParentComponent,
    ChildComponent,
    UserComponent,
    HomeComponent,
    MyobservableComponent,
    LanguagesComponent,
    AngularFormComponent,
    ReactiveFormComponent,
    PipesComponent,
    ExponentialStrengthPipe,
    CourseComponent,
    AddcourseComponent,
    UpdatecourseComponent,
    DirectivesComponent,
    RedDirective,
    NotIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
