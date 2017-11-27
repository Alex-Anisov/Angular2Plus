import { Component, ElementRef } from '@angular/core';
import {ProductListComponent} from './app/products/product-list/product-list.component';
import { CartComponent } from './app/carts/cart/cart.component';
import { ViewChild } from '@angular/core';

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
