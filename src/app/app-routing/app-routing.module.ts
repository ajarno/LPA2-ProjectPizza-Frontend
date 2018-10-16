import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent }      from '../pizza-list/pizza-list.component';
import { PizzaDetailComponent } from '../pizza-detail/pizza-detail.component';

const routes: Routes = [
  // { path: '', redirectTo: '/pizza-list', pathMatch: 'full' },
  { path: '', component: PizzaListComponent },
  { path: 'pizza-list', component: PizzaListComponent },
  { path: 'pizza-list/:id', component: PizzaDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}