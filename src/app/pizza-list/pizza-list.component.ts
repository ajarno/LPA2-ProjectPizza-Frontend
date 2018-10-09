import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  pizzaParent: Array<Pizza> = []
  
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaService.listPizzas().subscribe( pizzas => this.pizzaParent = pizzas)
  }

}
