import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessagesService } from './../../shared/services/messages.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(
    private router: Router,
  	private _messages: MessagesService
  ) {}

  ngOnInit(): void {
  }

  executeQuery($event: Event) {
    this.router.navigate(['app/items'], { queryParams: { search: $event }});
  }

}
