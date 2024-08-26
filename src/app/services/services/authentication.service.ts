/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authenticate } from '../fn/authentication/authenticate';
import { Authenticate$Params } from '../fn/authentication/authenticate';
import { AuthenticationResponse } from '../models/authentication-response';
import { confirm } from '../fn/authentication/confirm';
import { Confirm$Params } from '../fn/authentication/confirm';
import { handlePasswordReset } from '../fn/authentication/handle-password-reset';
import { HandlePasswordReset$Params } from '../fn/authentication/handle-password-reset';
import { register } from '../fn/authentication/register';
import { Register$Params } from '../fn/authentication/register';
import { resetPassword } from '../fn/authentication/reset-password';
import { ResetPassword$Params } from '../fn/authentication/reset-password';
import { showResetPasswordPage } from '../fn/authentication/show-reset-password-page';
import { ShowResetPasswordPage$Params } from '../fn/authentication/show-reset-password-page';


/**
 * Operations related to user authentication
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `showResetPasswordPage()` */
  static readonly ShowResetPasswordPagePath = '/auth/reset-password';

  /**
   * Show password reset page.
   *
   * Validates the password reset token and displays the password reset page.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `showResetPasswordPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  showResetPasswordPage$Response(params: ShowResetPasswordPage$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return showResetPasswordPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Show password reset page.
   *
   * Validates the password reset token and displays the password reset page.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `showResetPasswordPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  showResetPasswordPage(params: ShowResetPasswordPage$Params, context?: HttpContext): Observable<string> {
    return this.showResetPasswordPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `handlePasswordReset()` */
  static readonly HandlePasswordResetPath = '/auth/reset-password';

  /**
   * Handle password reset.
   *
   * Handles the password reset process once the user submits their new password.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `handlePasswordReset()` instead.
   *
   * This method doesn't expect any request body.
   */
  handlePasswordReset$Response(params: HandlePasswordReset$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return handlePasswordReset(this.http, this.rootUrl, params, context);
  }

  /**
   * Handle password reset.
   *
   * Handles the password reset process once the user submits their new password.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `handlePasswordReset$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  handlePasswordReset(params: HandlePasswordReset$Params, context?: HttpContext): Observable<string> {
    return this.handlePasswordReset$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `register()` */
  static readonly RegisterPath = '/auth/register';

  /**
   * Register a new user.
   *
   * Registers a new user and sends an account activation email.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(params: Register$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return register(this.http, this.rootUrl, params, context);
  }

  /**
   * Register a new user.
   *
   * Registers a new user and sends an account activation email.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(params: Register$Params, context?: HttpContext): Observable<{
}> {
    return this.register$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `resetPassword()` */
  static readonly ResetPasswordPath = '/auth/forgot-password';

  /**
   * Initiate password reset.
   *
   * Sends an email to the user with a link to reset their password.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPassword$Response(params: ResetPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return resetPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * Initiate password reset.
   *
   * Sends an email to the user with a link to reset their password.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPassword(params: ResetPassword$Params, context?: HttpContext): Observable<AuthenticationResponse> {
    return this.resetPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
    );
  }

  /** Path part for operation `authenticate()` */
  static readonly AuthenticatePath = '/auth/authenticate';

  /**
   * Authenticate a user.
   *
   * Authenticates a user and returns a JWT token.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate$Response(params: Authenticate$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return authenticate(this.http, this.rootUrl, params, context);
  }

  /**
   * Authenticate a user.
   *
   * Authenticates a user and returns a JWT token.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate(params: Authenticate$Params, context?: HttpContext): Observable<AuthenticationResponse> {
    return this.authenticate$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
    );
  }

  /** Path part for operation `confirm()` */
  static readonly ConfirmPath = '/auth/activate-account';

  /**
   * Activate a user account.
   *
   * Activates a user's account using the token sent in the activation email.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confirm()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirm$Response(params: Confirm$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return confirm(this.http, this.rootUrl, params, context);
  }

  /**
   * Activate a user account.
   *
   * Activates a user's account using the token sent in the activation email.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `confirm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirm(params: Confirm$Params, context?: HttpContext): Observable<void> {
    return this.confirm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
