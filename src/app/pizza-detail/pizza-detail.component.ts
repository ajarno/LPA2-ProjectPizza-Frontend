import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})

export class PizzaDetailComponent implements OnInit { 
  
  pizza: Pizza;

  constructor(private activateRoute: ActivatedRoute, private pizzaService: PizzaService){}

  ngOnInit() {
    const id = + this.activateRoute.snapshot.paramMap.get('id');

    this.pizzaService.showPizza(id)
    .subscribe(pizza => this.pizza = pizza);
  }
}

// future optimization: handling error (eg: https://angular.io/tutorial/toh-pt6#error-handling)