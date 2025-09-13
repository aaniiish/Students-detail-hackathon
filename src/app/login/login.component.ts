// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username = '';
//   password = '';

//   constructor(private router: Router) {}

//   login() {
//     // simple check (later connect with backend)
//     if (this.username && this.password) {
//       this.router.navigate(['/home']);
//     } else {
//       alert('Enter username and password');
//     }
//   }
// }
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username = '';
//   password = '';

//   constructor(private router: Router) {}

//   onLogin() {
    
//     if (this.username && this.password) {
//       console.log('Attempting to log in with username:', this.username);
//       console.log('Login successful! Navigating to dashboard...');
//       this.router.navigate(['/dashboard']);
//     } else {
//       console.log('Please enter both username and password.');
      
//     }
//   }
// }
// src/app/auth.service.ts
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

//   login(username: string): Observable<any> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

//     return this.http.post<any>(`${this.apiUrl}/login`, { username }, { headers }).pipe(
//       tap(response => {
//         console.log('Login successful:', response);
//       }),
//       catchError(this.handleError)
//     );
//   }

//   private handleError(error: HttpErrorResponse): Observable<never> {
//     let errorMessage: string;
//     if (error.error instanceof ErrorEvent) {
//       // Client-side or network error occurred.
//       errorMessage = `An error occurred: ${error.error.message}`;
//     } else {
//       // The backend returned an unsuccessful response code.
//       errorMessage = `Backend returned code ${error.status}: ${error.error.message || 'Unknown error'}`;
//     }
//     console.error(errorMessage);
//     return throwError(() => new Error(errorMessage));
//   }
// }
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../login.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';

//   constructor(
//     private router: Router,
//     private authService: AuthService // Inject the AuthService
//   ) { }

//   onLogin(): void {
//     // Check if both username and password have been entered
//     if (this.username && this.password) {
//       // Call the login method from your AuthService
//       this.authService.login(this.username).subscribe(
//         response => {
//           // Success: The user was stored in the database
//           console.log('Login successful:', response.message);
          
//           // Navigate to the profile page, passing the username
//           this.router.navigate(['/profile'], { queryParams: { name: this.username } });
//         },
//         error => {
//           // Handle any errors from the backend
//           console.error('Login failed:', error);
//           alert('Login failed. Please try again.');
//         }
//       );
//     } else {
//       // If fields are empty, show an alert
//       alert('Please enter both username and password.');
//     }
//   }
// }
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../login.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';

//   constructor(
//     private router: Router,
//     private authService: AuthService
//   ) { }

//   onLogin(): void {
//     if (this.username && this.password) {
//       this.authService.login(this.username).subscribe(
//         response => {
//           // Success: The user was stored in the database
//           console.log('Login successful:', response.message);
          
        
//           alert('Login successful'); 
          
//           // Navigate to the profile page
//           this.router.navigate(['/profile'], { queryParams: { name: this.username } });
//         },
//         error => {
//           // Handle any errors from the backend
//           console.error('Login failed:', error);
//           alert('Login failed. Please try again.');
//         }
//       );
//     } else {
//       alert('Please enter both username and password.');
//     }
//   }
// }
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../login.service'; 

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';

//   constructor(
//     private router: Router,
//     private authService: AuthService
//   ) { }

//   onLogin(): void {
//     if (this.username && this.password) {
//       this.authService.login(this.username).subscribe(
//         response => {
        
//           console.log('Login successful:', response.message);
          
          
//           alert('Login successful'); 
          
        
//           this.router.navigate(['/profile'], { queryParams: { name: this.username } });
//         },
//         error => {
        
//           console.error('Login failed:', error);
//           alert('Login failed. Please try again.');
//         }
//       );
//     } else {
//       alert('Please enter both username and password.');
//     }
//   }
// }
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../login.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';

//   constructor(
//     private router: Router,
//     private authService: AuthService
//   ) {}

//   onLogin(): void {
//     if (!this.username || !this.password) {
//       alert('Please enter both username and password.');
//       return;
//     }

//     this.authService.login(this.username, this.password).subscribe({
//       next: (response: any) => {
//         console.log('Login successful:', response);

//         alert('Login successful');

//         // Navigate to profile page with username
//         this.router.navigate(['/profile'], { queryParams: { name: this.username } });
//       },
//       error: (error) => {
//         console.error('Login failed:', error);
//         alert('Login failed. Please try again.');
//       }
//     });
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onLogin(): void {
    if (!this.username || !this.password) {
      alert('Please enter both username and password.');
      return;
    }

    this.authService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        alert('Login successful!');
        this.router.navigate(['/profile'], { queryParams: { name: this.username } });
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid username or password.');
      }
    });
  }
}