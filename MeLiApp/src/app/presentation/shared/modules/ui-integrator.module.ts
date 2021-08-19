import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

//Components
import { NotificationsComponent } from './../components/notifications/notifications.component';
import { ItemComponent } from './../components/item/item.component';
import { InputSearchComponent } from './../components/input-search/input-search.component';
import { DetailComponent } from './../components/detail/detail.component';
import { BreadcrumComponent } from './../components/breadcrum/breadcrum.component';

@NgModule({
  declarations: [
    NotificationsComponent,
    //Components    
    ItemComponent,
    DetailComponent,
    InputSearchComponent,
    BreadcrumComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    //Material
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,    
    FlexLayoutModule
  ],
  exports: [
    BrowserModule,
  	//Material
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,    
    FlexLayoutModule,
    //Components
    ItemComponent,
    DetailComponent,
    InputSearchComponent,
    BreadcrumComponent
  ],
  entryComponents: [
    NotificationsComponent
  ]
})
export class UIIntegratorModule { }
