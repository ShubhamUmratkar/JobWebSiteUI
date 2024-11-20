import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../model/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  // Method to register a new user
  registerUser(user: User): Observable<any> { // Updated parameter type to User
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/user/register`, user, { headers, responseType: 'text' }) // Sending User object
      .pipe(
        map((response: string) => {

          console.log('Registration response:', response); // Log the response to check
          if (response === 'User registered successfully.') {
            return { success: true, message: response };
          } else {
            return { success: false, message: 'Registration failed. Please try again.' };
          }
        }),
        catchError((error: any) => {
          console.error('Registration failed', error);
          return throwError(() => new Error('Registration failed. Please try again later.'));
        })
      );
  }

  loginUser(userName: string, password: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { userName, password };

    return this.http.post(`${this.baseUrl}/user/login`, body, { 
        headers, 
        responseType: 'text'  // Specify the response type as 'text'
    }).pipe(
        map((response: string) => {
            console.log('Login response:', response);
            return response;  // Return the response as a string
        }),
        catchError((error: any) => {
            alert(error.error);  // Show error message
            console.error('Login failed', error);
            return throwError(() => new Error('Login failed. Please try again later.'));
        })
    );
}



  // Method to fetch all users
  getAllUsers(): Observable<User[]> { // Updated return type to Observable<User[]>
    return this.http.get<User[]>(`${this.baseUrl}/getAllUsers`) // Expecting an array of User objects
      .pipe(
        catchError((error: any) => {
          console.error('Failed to fetch users', error);
          return throwError(() => new Error('Failed to fetch users. Please try again later.'));
        })
      );
  }
}
