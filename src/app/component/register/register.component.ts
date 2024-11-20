import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = new User('', '', '', '', '', '');  // Initialize user with default empty values
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    // Basic form validation
    if (!this.user.userName || !this.user.password || !this.user.emailId || !this.user.mobileNo || !this.user.fullName) {
      this.errorMessage = 'Please fill in all required fields';
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    // Sending the user data to the backend
    this.userService.registerUser(this.user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
        this.successMessage = response.message;  // Assuming the backend returns { message: "success" }
        this.router.navigate(['/login']);  // Redirect after successful registration
      },
      (error) => {
        console.error('Registration failed', error);
        this.errorMessage = error.error ? error.error.message : 'Registration failed. Please try again.';
      }
    );
  }
}