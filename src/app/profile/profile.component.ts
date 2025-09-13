// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent {

// }
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // In a real application, you would fetch this data from an API
  // and store it in a model. For this example, we'll use static data.
  profileData = {
    name: 'Arjun Sharma',
    rollNo: '2021CS001',
    department: 'Computer Science',
    year: '3',
    gpa: '8.5',
    attendance: '92%',
    assignments: 3,
    email: 'arjun.sharma@example.com',
    phone: '+91 9876543210',
    resumeUrl: 'assets/arjun-sharma-resume.pdf',
    careerGoals: 'Aspiring software engineer with a passion for AI and machine learning. Seeking opportunities to contribute to innovative projects and grow professionally.'
  };

  constructor(
    private location: Location,
    private router: Router
  ) { }

  /**
   * Navigates back to the previous page in the browser's history.
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Handles the download resume button click.
   */
  onDownloadResume(): void {
    // You would typically link to an actual file or a download service here.
    console.log('Downloading resume...');
    window.open(this.profileData.resumeUrl, '_blank');
  }
}