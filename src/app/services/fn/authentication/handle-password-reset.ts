/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface HandlePasswordReset$Params {
  token: string;
  newPassword: string;
}

export function handlePasswordReset(http: HttpClient, rootUrl: string, params: HandlePasswordReset$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, handlePasswordReset.PATH, 'post');
  if (params) {
    rb.query('token', params.token, {});
    rb.query('newPassword', params.newPassword, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

handlePasswordReset.PATH = '/auth/reset-password';
