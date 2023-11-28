import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page403',
  templateUrl: './page403.component.html',
  styleUrls: ['./page403.component.css']
})
export class Page403Component implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    goToLogin(): void {
      this.router.navigate(['/login']);
    }

}
