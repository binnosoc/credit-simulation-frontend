/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { calcPayment } from '../fn/simulation/calc-payment';
import { CalcPayment$Params } from '../fn/simulation/calc-payment';
import { SimResponse } from '../models/sim-response';

@Injectable({ providedIn: 'root' })
export class SimulationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `calcPayment()` */
  static readonly CalcPaymentPath = '/sim/calc-payment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `calcPayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  calcPayment$Response(params: CalcPayment$Params, context?: HttpContext): Observable<StrictHttpResponse<SimResponse>> {
    return calcPayment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `calcPayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  calcPayment(params: CalcPayment$Params, context?: HttpContext): Observable<SimResponse> {
    return this.calcPayment$Response(params, context).pipe(
      map((r: StrictHttpResponse<SimResponse>): SimResponse => r.body)
    );
  }

}
