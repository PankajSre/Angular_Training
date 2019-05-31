import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../employee.mock';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees = EMPLOYEES;
  constructor() { }
  // employee = {
  //   id: 101,
  //   name: 'Rakesh',
  //   address: 'Gurugram',
  //   age: 34
  // };
  ngOnInit() {
  }

}
