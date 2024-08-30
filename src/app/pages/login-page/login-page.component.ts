import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationRequest } from '../../services/models';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit  {
  
  authenticationRequest: AuthenticationRequest = { email: '', password: '' };
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router
  ){

  }
  ngOnInit(): void {
      
  }

  
  login() {
    
    this.userService.login(this.authenticationRequest).subscribe((data) => {
      this.userService.setAccessToken(data);
      this.getUserByEmail();
      this.router.navigate(['/sim']);
    }, error => {
      this.errorMessage = 'Login et / ou mot de passe incorrecte';
    });
  }

  getUserByEmail(): void {
    this.userService.getUserByEmail(this.authenticationRequest.email)
    .subscribe(user => {
      this.userService.setConnectedUser(user);
    });
  }
}
