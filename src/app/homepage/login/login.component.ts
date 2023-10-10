import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/Models/user';
import { RegistrationServiceService } from 'src/app/registration-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  loginSuccess = false;
  msg = '';

  constructor(private service: RegistrationServiceService, private router: Router, private http: HttpClient) {}

  login() {
    this.service.loginFromRemote(this.user).subscribe(
      (response: any) => {
        // Successful login
        const token = response.token;
        localStorage.setItem('token', token); // Store the token in local storage
        this.loginSuccess = true;
        this.msg = 'User logged in successfully';
        this.router.navigate(['/dashboard']); // Redirect to dashboard or desired page
      },
      (error: any) => {
        // Failed login
        console.error('Login failed:', error);
        this.loginSuccess = false;
        this.msg = 'Bad credentials, please enter valid email and password';
      }
    );
  }
}
