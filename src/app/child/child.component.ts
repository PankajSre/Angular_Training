import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData: string;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onEventChange(value) {
    this.childEvent.emit(value);
  }
}
