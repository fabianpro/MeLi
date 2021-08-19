import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { UIIntegratorModule } from './presentation/shared/modules/ui-integrator.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './presentation/app/container/container.component';
import { ItemsComponent } from './presentation/app/items/items.component';
import { DetailsComponent } from './presentation/app/details/details.component';
import { MessagesService } from './presentation/shared/services/messages.service';

//Domain
import { ProductGateway } from './domain/models/products/gateways/product-gateway';

//Infraestructure
import { ProductsApiService } from './infraestructure/driven-adapters/products-api/products-api.service';

export const API_GATEWAYS_PROVIDERS = [
  { provide: ProductGateway, useClass: ProductsApiService }
];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ItemsComponent,
    DetailsComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    UIIntegratorModule
  ],
  providers: [
    MessagesService,
    API_GATEWAYS_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
