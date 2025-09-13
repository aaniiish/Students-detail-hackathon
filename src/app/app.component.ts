import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalpro';
  ngOnInit(): void {
  const splash = document.getElementById('splash-screen');
  if (splash) {
    splash.style.display = 'none';
  }
}
}
