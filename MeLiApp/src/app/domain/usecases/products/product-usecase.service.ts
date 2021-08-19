import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductGateway } from './../../models/products/gateways/product-gateway';
import { Response } from './../../models/products/response';

@Injectable({
  providedIn: 'root'
})
export class ProductUsecaseService {

  constructor(
  	private _productGateway: ProductGateway
  ) { }

  getItems(query?: string): Observable<Response> {
    return this._productGateway.getItems(query);
  }

  getItemDetail(id: string): Observable<Response> {
  	return this._productGateway.getItemDetail(id);
  }
}
