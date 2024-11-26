import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  loginFailed = false;
  errorMessage: string = '';
  username: string = '';
  password: string = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router,private authService:AuthServiceService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // On form submission
  onSubmit() {
    this.submitted = true;

    // If form is invalid, return
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;

    // Call the userService to login
    this.userService.loginUser(username, password).subscribe(
      (response: any) => {
        // Successful login
        alert('Successfully LogIn');  // Assuming your backend returns a message in the response body
        this.loginFailed = false;
        this.router.navigate(['/']);  // Navigate to another page after successful login
      },
      (error) => {
        // Login failed
        this.loginFailed = true;
        this.errorMessage = error.error || 'Login failed. Please try again later.';
      }
    );

    const isSuccess = this.authService.login(this.username, this.password);
    if (isSuccess) {
      this.router.navigate(['/']);  // Redirect to home page after login
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
  

  // Getter for easy access to form controls in the template
  get f() {
    return this.loginForm.controls;
  }

  navigateToAdminLogin(){
    this.router.navigate(['/adminlogindynamic']);
  }

  navigateToForgotPassword(){

  }

  navigateToHome(){
    this.router.navigate(['/']);
  }
}
