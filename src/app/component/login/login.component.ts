import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
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
