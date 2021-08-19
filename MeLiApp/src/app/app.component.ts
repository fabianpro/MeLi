import { Component, OnInit } from '@angular/core';

import { MessagesService } from './presentation/shared/services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

	constructor(
  	private _messages: MessagesService
  ) {}

  ngOnInit(): void {
  }

	executeQuery($event: Event) {
  	console.log($event)
  }
}
