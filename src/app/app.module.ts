// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';
// import {HttpClientModule} from '@angular/common/http';
// import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { ProfileComponent } from './profile/profile.component';
// // import { FarmerUploadComponent } from './farmerupload/farmerupload.component';
// // import { LivelocationComponent } from './livelocation/livelocation.component';


// @NgModule({
//   declarations: [
//     AppComponent,
    
//     LoginComponent,
//          DashboardComponent,
//          NavbarComponent,
//          ProfileComponent,
    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     RouterModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    ProfileComponent,
    // Add any other components here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    // Add any other modules here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }