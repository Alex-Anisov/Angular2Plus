import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ProductComponent} from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component'

import {ProductService} from './products/product/product.service'
import {CartService} from './cart/cart.service';
import { CartComponent } from './cart/cart.component'


@NgModule({
  declarations: [
    AppComponent, ProductComponent, ProductListComponent, CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
