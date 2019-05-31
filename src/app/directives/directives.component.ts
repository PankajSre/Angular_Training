import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isBold = true;
  fontSize = 30;
  isItalic = true;
  value = 3;
  applyBoldClass = true;
  applyItalicClass = true;

  constructor() { }

  ngOnInit() {
  }
  MyStyle() {
    const myStyles = {
      'font-weight': this.isBold = true,
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size-px': this.fontSize
    };
    return myStyles;
  }

  applyClasses() {
    const classes = {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicClass
    };
    return classes;
  }
}
