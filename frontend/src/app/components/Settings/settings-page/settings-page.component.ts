import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {

  }
  goToChat(): void {
    this.router.navigate(['/chat']);
  }

}
