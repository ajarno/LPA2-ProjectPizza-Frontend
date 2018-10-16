import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { OrderService } from '../REST';


@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})

export class PizzaDetailComponent implements OnInit { 
  
  pizza: Pizza;
  public payPalConfig?: PayPalConfig;


  constructor(private activateRoute: ActivatedRoute, 
              private pizzaService: PizzaService,
              private orderService: OrderService){}

  ngOnInit() {
    const id = +this.activateRoute.snapshot.paramMap.get('id');

    this.pizzaService.showPizza(id).subscribe(pizza => {
      this.pizza = pizza,
      this.initConfig(pizza)
    });
  }

  private initConfig(pizza: Pizza): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AZqhpJWza1_BH1oW4UhtyA4MWiqBrvBiAgpinPgnPph-NehWMJN6iQ3kL4EPS2oRGFWWpJdm7R_TlEql'
      },
      button: {
        label: 'checkout',
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'USD',
          total: this.pizza.price
        }
      }]
    });
  }
}

// future optimization: handling error (eg: https://angular.io/tutorial/toh-pt6#error-handling)