import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UtilsService } from './../../helpers/services/utils.service';
import { ProductGateway } from './../../../domain/models/products/gateways/product-gateway';

import { Response } from './../../../domain/models/products/response';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService extends ProductGateway {

	private _url: string = `${environment.rest.endpointMeLi}/api/items`;

  constructor(
  	private http: HttpClient
  ) { 
  	super();
  } 

  getItems(query?: string): Observable<Response> {
    const queryParams = UtilsService.getQueryStringFromJSON({
      q: query,
      limit: 4
    });
    return this.http.get<Response>(`${this._url}?${queryParams}`);
  }

  getItemDetail(id: string): Observable<Response> {
    return this.http.get<Response>(`${this._url}/${id}/detail`);
  }

}
