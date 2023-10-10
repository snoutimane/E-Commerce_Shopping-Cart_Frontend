import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInValue: boolean = false;

  constructor(private router: Router) { }

  logout() {
    // Clear the token from local storage
    localStorage.removeItem('token');

    // Redirect to the homepage
    this.router.navigate(['/']);
  }

  // Call this method to set the login status
  setLoggedIn(value: boolean) {
    this.isLoggedInValue = value;
  }

  // Call this method to check if the user is logged in
  isLoggedIn(): boolean {
    return this.isLoggedInValue;
  }
}
