import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';
@Component({
  selector: 'new-account-form',
  templateUrl: './new-account-form.component.html',
  styleUrls: ['./new-account-form.component.css']
})
export class NewAccountFormComponent {
  username: string = '';
  password: string = '';

  constructor(private dataService: DataService) {}

  createAccount(): void {
    if (this.username.trim() !== '' && this.password.trim() !== '') {
      this.dataService.addUser(this.username, this.password)
        .then(userId => {
          console.log(`User with ID ${userId} created successfully!`);
          // Perform any additional actions or navigate after user creation if needed
        })
        .catch(error => {
          console.error('Error creating user:', error);
          // Handle error: display a message, log, or take appropriate action
        });
    } else {
      console.error('Username and password are required!');
      // Handle case where username or password is empty
    }
  }
}
