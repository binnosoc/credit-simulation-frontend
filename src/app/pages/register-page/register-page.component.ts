import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RegistrationRequest } from '../../services/models';
import { AuthenticationService } from '../../services/services';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  registrationRequest: RegistrationRequest = {email: '', firstname: '', lastname: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  login() {
    this.router.navigate(['login']);
  }
  
  register() {
    this.errorMsg = [];
  
    if (this.isFormValid()) {
      this.authService.register({
        body: this.registrationRequest
      })
      .subscribe({
        next: () => {
          this.router.navigate(['activate-account']);
        },
        error: (err) => {
          this.errorMsg = err.error.validationErrors || ['Une erreur est survenue lors de l\'enregistrement.'];
          
        }
      });
    } else {
      this.errorMsg.push('Veuillez remplir tous les champs obligatoires.');
    }
  }
  
  isFormValid(): boolean {
    return this.registrationRequest.email !== '' &&
           this.registrationRequest.firstname !== '' &&
           this.registrationRequest.lastname !== '' &&
           this.registrationRequest.password !== '';
  }
}
