import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CodeInputModule } from 'angular-code-input';

import { AuthenticationService } from '../../services/services';

@Component({
  selector: 'app-activate-account-page',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, CodeInputModule], 
  templateUrl: './activate-account-page.component.html',
  styleUrl: './activate-account-page.component.css'
})
export class ActivateAccountPageComponent {
  message = '';
  isOkay = true;
  submitted = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  private confirmAccount(token: string) {
    this.authService.confirm({ token }).subscribe({
      next: () => {
        this.message = 'Your account has been successfully activated.\nNow you can proceed to login';
        this.submitted = true;
      },
      error: () => {
        this.message = 'Token has been expired or invalid';
        this.submitted = true;
        this.isOkay = false;
      }
    });
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

}
