import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() { }

  login(username: string, password: string): boolean {
    // In a real-world app, make an HTTP request to authenticate
    if (username === 'user' && password === 'password') {  // Example login check
      this.isLoggedInSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
  }
}