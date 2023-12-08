import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.router.navigate(['/chat']);
  }

  goToSettings(): void {
    this.router.navigate(['/settings']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToHistory(): void {
    this.router.navigate(['/history']);
  }

  signOut(): void {
    this.dataService.setUserID(null);
    console.log('User signed out successfully!');
    this.router.navigate(['/login']);
  }
}
