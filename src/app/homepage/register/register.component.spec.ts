import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { RegisterComponent } from './register.component';
import { RegistrationServiceService } from 'src/app/registration-service.service';
import { User } from 'src/app/Models/user';
import { of, throwError } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let registrationService: jasmine.SpyObj<RegistrationServiceService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(waitForAsync(() => {
    const registrationServiceSpy = jasmine.createSpyObj('RegistrationServiceService', ['registerUserFromRemote']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule],
      providers: [DatePipe, { provide: RegistrationServiceService, useValue: registrationServiceSpy }, { provide: Router, useValue: routerSpy }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    registrationService = TestBed.inject(RegistrationServiceService) as jasmine.SpyObj<RegistrationServiceService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should register the user and redirect to login page on successful registration', () => {
    const user: User = {
      fullName: 'John Doe',
      userName: 'johndoe',
      emailId: 'john.doe@example.com',
      mobileNumber: 1234567890,
      dateOfBirth: new Date(),
      gender: 'Male',
      role: 'User',
      password: 'password'
    };

    registrationService.registerUserFromRemote.and.returnValue(of({}));
    component.user = user;
    component.confirmPassword = user.password;
    component.registerUser();

    expect(registrationService.registerUserFromRemote).toHaveBeenCalledWith(user);
    expect(component.msg).toBe('Registration Successful');
    expect(component.registrationSuccess).toBe(true);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should show an error message on registration failure', () => {
    const user: User = {
      fullName: 'John Doe',
      userName: 'johndoe',
      emailId: 'john.doe@example.com',
      mobileNumber: 1234567890,
      dateOfBirth: new Date(),
      gender: 'Male',
      role: 'User',
      password: 'password'
    };

    const errorMessage = 'Failed to register user';

    registrationService.registerUserFromRemote.and.returnValue(throwError(errorMessage));
    component.user = user;
    component.confirmPassword = user.password;
    component.registerUser();

    expect(registrationService.registerUserFromRemote).toHaveBeenCalledWith(user);
    expect(component.msg).toBe(errorMessage);
  });

  it('should show password mismatch error when passwords do not match', () => {
    component.user.password = 'password';
    component.confirmPassword = 'password123';
    component.registerUser();

    expect(component.passwordMismatch).toBe(true);
    expect(registrationService.registerUserFromRemote).not.toHaveBeenCalled();
  });

});
