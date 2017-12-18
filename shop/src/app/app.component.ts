import { Component, ElementRef } from '@angular/core';
import {ProductsComponent} from './components/products';
import { CartComponent } from './components/cart/cart.component';
import { ViewChild } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('cart') cart: CartComponent;

  public resetAll() {
    this.cart.clearAll();
  }
}
