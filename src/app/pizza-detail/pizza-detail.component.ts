import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit { 
  public id = + this.activateRoute.snapshot.paramMap.get('id');
  pizza: Pizza;
  constructor(
    private activateRoute: ActivatedRoute,
    private location: Location,
    private pizzaService: PizzaService){}


  ngOnInit() {
    this.pizzaService.showPizza(this.id)
    .subscribe(pizza => this.pizza = pizza);
  }

}
