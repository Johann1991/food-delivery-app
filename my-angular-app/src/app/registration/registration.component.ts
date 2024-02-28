import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../services/register.service'; 

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  // User object to bind the form inputs using ngModel
  user = {
    username:"",
    email:"",
    password:"",
  }

  constructor(private registrationService: RegisterService){}

  // Method to call the registerUser method
  register() {
    this.registrationService.registerUser(this.user).subscribe({
      next: (response) => {
        console.log('Raw response: ', response); // Logs raw response for debugging
        console.log('Registration successful', response); // Log a success message
      },
      error:(error) => {
        console.error('Registration failed', error);
      }
    })
  }
}
