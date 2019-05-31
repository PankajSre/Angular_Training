import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to TrainingApp ';

  name = 'NIIT';

  changeName() {
    this.name = 'NIIT LTD';
  }
}
