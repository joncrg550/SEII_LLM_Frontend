import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToChat(): void {
    this.router.navigate(['/chat']);
  }

  goToNewAccount(): void {
    this.router.navigate(['/new-account']);
  }

}
