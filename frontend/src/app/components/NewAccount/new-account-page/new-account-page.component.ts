import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'new-account-page',
  templateUrl: './new-account-page.component.html',
  styleUrls: ['./new-account-page.component.css']
})
export class NewAccountPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
