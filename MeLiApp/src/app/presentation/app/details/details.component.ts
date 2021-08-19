import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Response } from './../../../domain/models/products/response';
import { ItemElement } from './../../../domain/models/products/item-element';
import { DataBreadcrum } from './../../shared/components/breadcrum/breadcrum.component';
import { ProductUsecaseService } from './../../../domain/usecases/products/product-usecase.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  dataBreadcrum: DataBreadcrum[] = new Array<DataBreadcrum>();
	model!: ItemElement;
	preloader: boolean = true;

  constructor(
  	private activatedRoute: ActivatedRoute,
  	private _useCase: ProductUsecaseService
  ) { }

  ngOnInit(): void {
  	this.activatedRoute.params.subscribe(
  		params => this.getDataObject(params.id));
  }

  private getDataObject(id: string) {
  	this._useCase.getItemDetail(id)
  		.subscribe(
  			res => {
          const data = <Response>res;
          for (let item of data.categories) {
            this.dataBreadcrum.push({
              value: item.name,
              link: item.id
            });
          }          
          this.model = data.items[0];
        },
  			error => console.error(error),
  			() => this.preloader = false
  		);
  }

  public buy(value: boolean = false) {
  	console.log(value);
  	alert("Comprar");
  }
}
