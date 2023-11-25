
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';

  constructor(private dataService: DataService) {}

  login(): void {
    if (this.username.trim() !== '' && this.password.trim() !== '') {
      this.dataService.verifyCredentials(this.username, this.password)
        .then(isValid => {
          if (isValid) {
            console.log('Login successful!');
            // Perform actions after successful login (e.g., navigate to a different page)
          } else {
            console.error('Invalid username or password!');
            // Handle case where login credentials are invalid
          }
        })
        .catch(error => {
          console.error('Error during login:', error);
          // Handle error during login process
        });
    } else {
      console.error('Username and password are required!');
      // Handle case where username or password is empty
    }
  }

  createAccount(): void {
    // Implement createAccount functionality if needed, perhaps using router navigation
    // You can redirect to the create account page or show a modal, etc.
  }
}
