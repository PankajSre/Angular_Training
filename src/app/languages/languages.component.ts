import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  private data: Observable<string>;
  private languages: Array<string> = [];
  private anyErrors: boolean;
  private finished: boolean;
  processed = false;

  constructor() {
  }
  ngOnInit() {
  }

  start() {
      this.data = new Observable<any>
          (
              observer => {
                  setTimeout(() => {
                      observer.next('Angular');
                  }, 2000);

                  setTimeout(() => {
                      observer.next('Python');
                  }, 4000);
                  setTimeout(() => {
                      observer.next('R Programming');
                  }, 6000);
                  setTimeout(() => {
                      observer.complete();
                  }, 8000);
                  setTimeout(() => {
                      observer.error(new Error('error occured'));
                  }, 9000);
              }
          );

      const subscription = this.data.
          subscribe(
              language => this.languages.push(language),
              error => this.anyErrors = true,
              () => this.finished = true
          );

      this.processed = true;

  }


}
