import { Component } from '@angular/core';
import { ProductComponent } from './products/product/product.component'
import {ProductListComponent} from './products/product-list/product-list.component'

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
