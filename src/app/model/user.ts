export class User {
    userName: string;
    fullName: string;
    emailId: string;
    password: string;
    confirmPassword: string;
    mobileNo: string;
  
    constructor(
      userName: string,
      fullName: string,
      emailId: string,
      password: string,
      confirmPassword: string,
      mobileNo: string
    ) {
      this.userName = userName;
      this.fullName = fullName;
      this.emailId = emailId;
      this.password = password;
      this.confirmPassword = confirmPassword;
      this.mobileNo = mobileNo;
    }
}
