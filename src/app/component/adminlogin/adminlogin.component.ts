import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  // Static credentials
  private staticUsername = 'admin';
  private staticPassword = 'admin@123';

  constructor(private router: Router) {}

  onSubmit(): void {
    // Simple username and password validation
    if (this.username === this.staticUsername && this.password === this.staticPassword) {
      this.loginError = false;
      alert('Login successful!');

      // Redirect to another page or take some action
      this.router.navigate(['/save-job']);
    } else {
      this.loginError = true;
    }
  }
}