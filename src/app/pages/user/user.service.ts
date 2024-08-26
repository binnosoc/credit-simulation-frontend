import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../../services/services';
import { AuthenticationRequest, AuthenticationResponse, User } from '../../services/models';
import { Authenticate$Params } from '../../services/fn/authentication/authenticate';
import { UserInfo } from 'os';

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


  isUserLoggedAndAccessTokenValid(): boolean {
    if (localStorage.getItem('accessToken')) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
