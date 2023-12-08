import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from '../services/data-service/data.service';


@Injectable({
  providedIn: 'root'
})
export class DisableRouteGuard implements CanActivate {

  constructor(private dataService: DataService, private router: Router) {}

  canActivate(): boolean {
    if (this.dataService.getUserID === null) {
      // If the condition (value is null) is met, prevent navigation and redirect to a specific route or return false
      this.router.navigate(['/403']); // Redirect to a disabled route
      return false;
    }
    return true; // Allow navigation
  }
}
