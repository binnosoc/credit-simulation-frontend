import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap,map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../../services/services';
import { AuthenticationRequest, AuthenticationResponse, SetPasswordRequest, User } from '../../services/models';
import { Authenticate$Params } from '../../services/fn/authentication/authenticate';
import { UserInfo } from 'os';
import { ResetPassword$Params } from '../../services/fn/authentication/reset-password';
import { ShowResetPasswordPage$Params } from '../../services/fn/authentication/show-reset-password-page';
import { ResetPasswordResponse } from '../interfaces/reset-password-response.model';
import { HandlePasswordReset$Params } from '../../services/fn/authentication/handle-password-reset';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    const params: Authenticate$Params = {
      body: authenticationRequest
    };
    return this.authenticationService.authenticate(params);
  }

  sendMailToResetPassword(resetPasswordRequest: SetPasswordRequest): Observable<AuthenticationResponse> {
    const params: ResetPassword$Params = {
      body: resetPasswordRequest
    };
    return this.authenticationService.resetPassword(params);
  }


  getUserByEmail(email?: string): Observable<User> {
    if (email) {
      return this.authenticationService.getUserByEmail({ email });
    }
    return of(); // Return a null observable if no email is provided
  }

  setAccessToken(authenticationResponse: AuthenticationResponse): void {
    localStorage.setItem('accessToken', JSON.stringify(authenticationResponse));
  }

  setConnectedUser(user: User): void {
    localStorage.setItem('connectedUser', JSON.stringify(user));
  }

  setAccessTokenForResetPassword(authenticationResponse: AuthenticationResponse): void {
    localStorage.setItem('accessTokenReset', JSON.stringify(authenticationResponse));
  }



  isUserLoggedAndAccessTokenValid(): boolean {
    if (localStorage.getItem('accessToken')) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }


  isValidToken(token: string): Observable<boolean> {
    const params: ShowResetPasswordPage$Params = { token: token };
  
    return this.authenticationService.showResetPasswordPage(params).pipe(
    
      map((response: any) => {
        // Check if the response has a status property
        if (response && typeof response.status === 'string') {
          const isValid = response.status === "reset-password";
          console.log('Token validation result:', isValid); // Log the validation result
          return isValid;
        } else {
          console.warn('Unexpected API response:', response); // Warn if the response is unexpected
          return false; // Treat unexpected responses as invalid
        }
      }),
      catchError(err => {
        console.error('Error occurred:', err); // Log the error
        return of(false);
      })
    );
  }
  
  
  resetPassword(token: string, password: string): Observable<boolean>{

    const params: HandlePasswordReset$Params  = { token: token, newPassword: password };
  
    return this.authenticationService.handlePasswordReset(params).pipe(
    
      map((response: any) => {
        // Check if the response has a status property
        if (response && typeof response.status === 'string') {
          const isUpdated = response.status === "ok";
          console.log('Password updated result:', isUpdated); // Log the validation result
          return isUpdated;
        } else {
          console.warn('Unexpected API response:', response); // Warn if the response is unexpected
          return false; // Treat unexpected responses as invalid
        }
      }),
      catchError(err => {
        console.error('Error occurred:', err); // Log the error
        return of(false);
      })
    );
  }
  

}
