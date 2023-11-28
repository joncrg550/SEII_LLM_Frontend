import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToSettings(): void {
    this.router.navigate(['/settings']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
