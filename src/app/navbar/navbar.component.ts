import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corrected to 'styleUrls' (plural)
})
export class NavbarComponent {

  constructor(private router: Router) {} // Inject the Router service

  // Method to navigate to the home component
  navigateToHome(): void {
    this.router.navigate(['/home']); // Navigates to the Home component
  }

  toggleFullScreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
}
