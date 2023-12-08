
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  login(): void {
    if (this.username.trim() !== '' && this.password.trim() !== '') {
      this.dataService.verifyCredentials(this.username, this.password)
        .toPromise()
        .then((response: any) => {
          const isValid: boolean = response.valid;
          const userId: number = response.user_id;
          if (isValid) {
            // Perform actions after successful login (e.g., navigate to a different page)
            this.dataService.setUserID(userId);
            this.router.navigate(['/chat']);
          } else {
            console.error('Invalid username or password!');
            // Handle case where login credentials are invalid
          }
        })
        .catch((error: any) => {
          console.error('Error during login:', error);
          // Handle error during login process
        });
    } else {
      console.error('Username and password are required!');
      // Handle case where username or password is empty
    }
  }

  createAccount(): void {
    // Navigate to the new account page
    this.router.navigate(['/new-account']);
  }
}
