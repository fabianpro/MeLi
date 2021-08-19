import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessagesService {

	private subject = new Subject<any>();

	public sendMessages(operation: string, message: any) {
		this.subject.next({
			operation: operation,
			message: message
		});
	}

	public clearMessages() {
		this.subject.next();
	}

	public getMessages(): Observable<any> {
		return this.subject.asObservable();
	}

}