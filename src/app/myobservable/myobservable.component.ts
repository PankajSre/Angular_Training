import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-myobservable',
  templateUrl: './myobservable.component.html',
  styleUrls: ['./myobservable.component.css']
})
export class MyobservableComponent implements OnInit, OnDestroy {
  numberSubscription: Subscription;
  myObservableSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumber = Observable.interval(3000);
    this.numberSubscription = myNumber.subscribe(
      (n: number) => {
        console.log(n);
      }
    );
    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('My First Observer');
        }, 2000);
        setTimeout(() => {
          observer.next('My Second Observer');
        }, 4000);
        setTimeout(() => {
          // observer.next('Error, it will not work');
          observer.complete();
        }, 5000);
        setTimeout(() => {
          observer.next('My Third Observer');
        }, 6000);
        setTimeout(() => {
          observer.next('My Fourth Observer');
        }, 8000);
      });

    this.myObservableSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('My scuscription completed!!!'); }
    );
  }
  ngOnDestroy() {
    this.numberSubscription.unsubscribe();
    this.myObservableSubscription.unsubscribe();

  }
}
