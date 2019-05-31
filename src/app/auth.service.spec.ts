import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    service = new AuthService();
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });
  afterEach(() => {
    service = null;
    localStorage.removeItem('username');
  });

  it('Should return true from isUserAuthenticated when username is there', () => {
    localStorage.setItem('username', 'admin');
    expect(service.isUserAuthenticated()).toBeTruthy();
  });
  it('Should return false from isUserAuthenticated when username is not there', () => {
    // localStorage.setItem('username', 'admin');
    expect(service.isUserAuthenticated()).toBeFalsy();
  });
});
