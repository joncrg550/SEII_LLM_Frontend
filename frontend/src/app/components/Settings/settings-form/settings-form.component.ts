import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';
@Component({
  selector: 'settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.css']
})
export class SettingsFormComponent {
  userId: number = 0; // Assuming a valid user ID
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  selectedTemperature: number = 1; // Assuming a range from 1 to 5
  selectedSpeed: number = 1; // Assuming a range from 1 to 5

  constructor(private dataService: DataService) {}

  submitForm(): void {
    if (
      this.currentPassword.trim() !== '' &&
      this.newPassword.trim() !== '' &&
      this.confirmPassword.trim() !== '' &&
      this.selectedTemperature > 0 &&
      this.selectedSpeed > 0
    ) {
      // Check if new password and confirm password match
      if (this.newPassword !== this.confirmPassword) {
        console.error('New password and confirm password do not match!');
        // Handle mismatched passwords
        return;
      }

      this.dataService.updateUser(this.userId, this.currentPassword, this.newPassword)
        .subscribe(() => {
          console.log('Password changed successfully!');
          // Perform actions after successful password change
        }, (error: any) => {
          console.error('Error changing password:', error);
          // Handle error during password change process
        });

      // Update user settings
      this.dataService.setUserSettings(this.userId,  this.selectedTemperature, this.selectedSpeed)
        .subscribe(() => {
          console.log('Settings updated successfully!');
          // Perform actions after successful settings update
        }, (error: any) => {
          console.error('Error updating settings:', error);
          // Handle error during settings update process
        });
    } else {
      console.error('All fields are required!');
      // Handle case where any field is empty
    }
  }

  deleteAccount(): void {
    if (confirm('Are you sure you want to delete your account?')) {
      this.dataService.deleteUser(this.userId)
        .subscribe(() => {
          console.log('Account deleted successfully!');
          // Perform actions after successful account deletion (e.g., navigate to a different page)
        }, (error: any) => {
          console.error('Error deleting account:', error);
          // Handle error during account deletion process
        });
    } else {
      console.log('Account deletion cancelled.');
      // Handle case where user cancels account deletion
    }
  }

//#TODO add a function to get the user's settings and populate the form with them
//#TODO add functions to update the user's settings individually
}
