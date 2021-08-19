import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ItemElement } from './../../../../domain/models/products/item-element';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

	@Input('model') model: ItemElement = new ItemElement();

  constructor(
  	private router: Router
  ) { }

  ngOnInit(): void {
  }

  public redirect(item: ItemElement) {
  	this.router.navigate([`app/items/${item.id}`]);
  }

}
