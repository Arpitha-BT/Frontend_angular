import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('user'); // Check for user login

    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Redirect to login if not logged in
      return false; // Prevent navigation
    }

    return true; // Allow navigation
  }
}
