export class User {
    fullName: string;
    userName: string;
    emailId: string;
    mobileNumber: number;
    dateOfBirth: Date;
    gender: string;
    role: string;
    password: string;
  
    constructor() {
      this.fullName = '';
      this.userName = '';
      this.emailId = '';
      this.mobileNumber = 0;
      this.dateOfBirth = new Date();
      this.gender = '';
      this.role = '';
      this.password = '';
    }
  }
  