import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserAuthenticated(): boolean {
    return !!localStorage.getItem('username');
  }
  constructor() { }
}
