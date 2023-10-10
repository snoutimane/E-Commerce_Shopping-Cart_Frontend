import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { User } from 'src/app/Models/user';
import { RegistrationServiceService } from 'src/app/registration-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  msg = '';
  confirmPassword = '';
  passwordMismatch = false;
  registrationSuccess = false;

  constructor(
    private _service: RegistrationServiceService,
    private _router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {}

  registerUser() {
    console.log('Before registerUser code block');
    if (this.user.password !== this.confirmPassword) {
      this.passwordMismatch = true;
      this.user.password = ''; // Clear password field
      this.confirmPassword = ''; // Clear confirmPassword field
      return;
    }

    console.log('After password check');

    this._service.registerUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('Registration submitted');
        this.msg = 'Registration Successful';
        this.registrationSuccess = true;
        setTimeout(() => {
          this._router.navigate(['login']);
        }, 1000);
      },
      (error) => {
        console.log('Exception Occurred');
        this.msg = 'Failed to register user';
      }
    );
  }

  formatDate(date: Date | null): string | null {
    if (date) {
      return this.datePipe.transform(date, 'yyyy-MM-dd');
    }
    return null;
  }
}
