import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { NgxPayPalModule } from 'ngx-paypal';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    PizzaDetailComponent
  ],

  imports: [
    NgxPayPalModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule 
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
