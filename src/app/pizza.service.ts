import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  URL = "https://lpa2sgadot.herokuapp.com"

  constructor(private httpclient: HttpClient) { }

  public listPizzas(): Observable<Pizza[]> {
    return this.httpclient.get<Pizza[]>(this.URL + '/pizzas.json')
  }
}
