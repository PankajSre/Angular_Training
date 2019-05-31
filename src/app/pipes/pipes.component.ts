import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  birthday = new Date(1985, 0, 10);
  currentDate = new Date();
  message = 'This is NCS Training';
  public languages = {
    'programming': 'TypeScript',
    'Frontend': 'Angular'
  };

  power = 2;
  factor = 1;
  constructor() { }

  ngOnInit() {
  }

}
