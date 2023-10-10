import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Check if the user is logged in
    this.isLoggedIn = this.checkLoggedIn();
    if (!this.isLoggedIn) {
      // User is not logged in, redirect to login page
      this.router.navigate(['/login']);
    }
  }

  checkLoggedIn(): boolean {
    // Implement the logic to check if the user is logged in
    // You can use the token stored in localStorage or any other authentication mechanism
    // Return true if the user is logged in, false otherwise
    const token = localStorage.getItem('token');
    return !!token; // Convert the token to a boolean value
  }
}
