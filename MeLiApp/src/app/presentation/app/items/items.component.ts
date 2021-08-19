import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Response } from './../../../domain/models/products/response';
import { ItemElement } from './../../../domain/models/products/item-element';
import { ProductUsecaseService } from './../../../domain/usecases/products/product-usecase.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

	data!: Response;
	preloader: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
  	private _useCase: ProductUsecaseService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if (queryParams.hasOwnProperty('search')) this.getData(queryParams.search);
      else this.getData();
    });
  }

  private getData(query?: string) {
  	this._useCase.getItems(query)
  		.subscribe(
  			res => this.data = <Response>res,
  			error => console.error(error),
  			() => this.preloader = false
  		);
  }

}
