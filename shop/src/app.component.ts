import { Component } from '@angular/core';
import {ProductListComponent} from './app/products/product-list/product-list.component';
import { CartComponent } from './app/carts/cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public doBuy(event) {
    console.log('Product purchased');
  }
}
