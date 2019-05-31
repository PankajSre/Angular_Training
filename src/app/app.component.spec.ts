import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

function sayHello() {
  return 'Hello Dear!';
}

describe('Say Hello', () => {
  let expected = '';

  beforeEach(() => {
    expected = 'Hello Dear!';
  });
  afterEach(() => {
    expected = '';
  });

  it('Say hello to Him', () => {
    expect(sayHello()).toEqual(expected);
  });
});
