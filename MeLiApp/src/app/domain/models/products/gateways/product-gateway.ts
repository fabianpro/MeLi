import { Observable } from 'rxjs';

import { Response } from './../response';

export abstract class ProductGateway {
	abstract getItems(query?: string): Observable<Response>;
	abstract getItemDetail(id: string): Observable<Response>;
}