import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ItemElement } from './../../../../domain/models/products/item-element';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

	@Input('model') model: ItemElement = new ItemElement();
	@Output('buy') buy: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
