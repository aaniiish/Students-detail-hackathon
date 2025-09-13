// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   constructor() { }
// }
// src/app/auth/auth.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { tap, catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:3000/api';
//   private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
//   isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

//   constructor(private http: HttpClient) { }

//   /**
//    * Logs in a user by sending credentials to the backend.
//    * On success, it stores user data and updates authentication status.
//    * @param username The user's name.
//    */
//   login(username: string): Observable<any> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post<any>(`${this.apiUrl}/login, { username }, { headers }`).pipe(
//       tap(response => {
//         // Assuming your backend returns a user object or token
//         console.log('Login successful:', response);
//         // You would typically save a token or user info here
//         localStorage.setItem('currentUser', JSON.stringify(response.user)); 
//         localStorage.setItem('isLoggedIn', 'true');
//         this.isAuthenticatedSubject.next(true);
//       }),
//       catchError(error => {
//         console.error('Login failed:', error);
//         this.isAuthenticatedSubject.next(false);
//         return throwError(() => new Error('Login failed.'));
//       })
//     );
//   }

//   /**
//    * Logs out the current user by clearing stored data.
//    */
//   logout(): void {
//     localStorage.removeItem('currentUser');
//     localStorage.removeItem('isLoggedIn');
//     this.isAuthenticatedSubject.next(false);
//   }

//   /**
//    * Checks if the user is authenticated (e.g., on app start).
//    */
//   checkAuthStatus(): void {
//     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//     this.isAuthenticatedSubject.next(isLoggedIn);
//   }
// }
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { tap, catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:3000/api';

//   constructor(private http: HttpClient) { }

//   /**
//    * Logs a user in by sending their username to the backend.
//    * @param username The username to be authenticated.
//    * @returns An Observable of the HTTP response.
//    */
//   login(username: string): Observable<any> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
//     return this.http.post<any>(`${this.apiUrl}/login`, { username }, { headers }).pipe(
//       tap(response => {
//         console.log('Login successful:', response);
//       }),
//       catchError(this.handleError)
//     );
//   }

//   /**
//    * Handles HTTP errors returned by the backend.
//    * @param error The HttpErrorResponse object.
//    * @returns An Observable that throws a new error with a descriptive message.
//    */
//   private handleError(error: HttpErrorResponse): Observable<never> {
//     let errorMessage: string;
//     if (error.error instanceof ErrorEvent) {
//       // A client-side or network error occurred.
//       errorMessage = `An error occurred: ${error.error.message}`;
//     } else {
//       // The backend returned an unsuccessful response code.
//       errorMessage = `Backend returned code ${error.status}: ${error.error.message || 'Unknown error'}`;
//     }
//     console.error(errorMessage);
//     return throwError(() => new Error(errorMessage));
//   }
// }
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { tap, catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:3000/api'; // ✅ adjust to your backend

//   constructor(private http: HttpClient) {}

//   /**
//    * Login by sending username + password
//    */
//   login(username: string, password: string): Observable<any> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

//     return this.http.post<any>(`${this.apiUrl}/login`, { username, password }, { headers }).pipe(
//       tap(response => {
//         console.log('Login successful:', response);

//         // Example: save token if backend sends it
//         if (response?.token) {
//           localStorage.setItem('token', response.token);
//         }
//       }),
//       catchError(this.handleError)
//     );
//   }

//   /**
//    * Handle backend errors
//    */
//   private handleError(error: HttpErrorResponse): Observable<never> {
//     let errorMessage: string;

//     if (error.error instanceof ErrorEvent) {
//       // Client-side / network error
//       errorMessage = `An error occurred: ${error.error.message}`;
//     } else {
//       // Backend error response
//       errorMessage = `Backend returned code ${error.status}: ${error.error.message || 'Unknown error'}`;
//     }

//     console.error(errorMessage);
//     return throwError(() => new Error(errorMessage));
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/register`, { username, password }, { headers }).pipe(
      tap(res => console.log('Register response:', res)),
      catchError(this.handleError)
    );
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }, { headers }).pipe(
      tap(res => console.log('Login response:', res)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('API error:', error);
    return throwError(() => error);
  }
}