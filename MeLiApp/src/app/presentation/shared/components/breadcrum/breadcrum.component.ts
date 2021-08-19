import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface DataBreadcrum {
	value: string;
	link: string;
}

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.scss']
})
export class BreadcrumComponent implements OnInit {

	@Input('data') data!: DataBreadcrum[];

  constructor(
  	private router: Router
  ) { }

  ngOnInit(): void {
  }

  public redirect(item: DataBreadcrum) {
  	this.router.navigate([item.link]);
  }

}
