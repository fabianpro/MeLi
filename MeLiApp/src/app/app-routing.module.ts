import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './presentation/app/container/container.component';
import { ItemsComponent } from './presentation/app/items/items.component';
import { DetailsComponent } from './presentation/app/details/details.component';
import { NotFoundComponent } from './presentation/shared/components/not-found/not-found.component';

const routes: Routes = [
	{ 
		path: '', 
		redirectTo: 'app',
		pathMatch:'full'
	},
	{
		path: 'app', 
    component: ContainerComponent,    
    children: [
      { path: '', redirectTo: 'items', pathMatch: 'full'},      
      { path: 'items', component: ItemsComponent },
      { path: 'items/:id', component: DetailsComponent },
      //NotFound
      { path: '**', component: NotFoundComponent }
    ]
  },
  //NotFound
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
