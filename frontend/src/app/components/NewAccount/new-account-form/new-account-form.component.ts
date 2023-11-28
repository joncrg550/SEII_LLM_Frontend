import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'new-account-form',
  templateUrl: './new-account-form.component.html',
  styleUrls: ['./new-account-form.component.css']
})
export class NewAccountFormComponent {
  username: string = '';
  password: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  createAccount(): void {
    if (this.username.trim() !== '' && this.password.trim() !== '') {
      this.dataService.addUser(this.username, this.password)
        .subscribe((userId: any) => {
          console.log(`User with ID ${userId} created successfully!`);
          // Navigate to the login page
          this.router.navigate(['/login']);
          // Perform any additional actions or navigate after user creation if needed
        }, (error: any) => {
          console.error('Error creating user:', error);
          // Handle error: display a message, log, or take appropriate action
        });
    } else {
      console.error('Username and password are required!');
      // Handle case where username or password is empty
    }
  }
  }

