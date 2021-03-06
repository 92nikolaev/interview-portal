/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse, 
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { ExcludedTimeSlot } from '../models/excluded-time-slot';

/**
 * Excluded Time Slot Controller
 */
 @Injectable()
export class ExcludedTimeSlotControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param excludedTimeSlot excludedTimeSlot
   */
   saveUsingPOST_1Response(excludedTimeSlot: ExcludedTimeSlot): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = excludedTimeSlot;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/excluded-time`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param excludedTimeSlot excludedTimeSlot
   */
   saveUsingPOST_1(excludedTimeSlot: ExcludedTimeSlot): Observable<void> {
    return this.saveUsingPOST_1Response(excludedTimeSlot).pipe(
      map(_r => _r.body)
    );
  }

    /**
   * @param id id
   */
  deleteUsingDELETE_1Response(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/excluded-time/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id id
   */
   deleteUsingDELETE_1(id: number): Observable<void> {
    return this.deleteUsingDELETE_1Response(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module ExcludedTimeSlotControllerService {
}
