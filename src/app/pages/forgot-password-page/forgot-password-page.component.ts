import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest, SetPasswordRequest } from '../../services/models';
import { UserService } from '../user/user.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password-page',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './forgot-password-page.component.html',
  styleUrl: './forgot-password-page.component.css'
})
export class ForgotPasswordPageComponent implements OnInit {
  resetPasswordRequest: SetPasswordRequest = { email: '' };
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }
  ngOnInit(): void {

  }


  forgotPassword() {

    this.userService.sendMailToResetPassword(this.resetPasswordRequest).subscribe((data) => {
      this.userService.setAccessTokenForResetPassword(data);
    }, error => {
      this.errorMessage = 'Login et / ou mot de passe incorrecte';
    });
  }

  getUserByEmail(): void {
    this.userService.getUserByEmail(this.resetPasswordRequest.email)
      .subscribe(user => {
        this.userService.setConnectedUser(user);
      });
  }
}
