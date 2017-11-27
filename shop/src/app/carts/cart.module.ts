import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {d}
import { ProductModule } from '../products/product.module';

import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

import { CartService } from './shared/cart.service';


@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [
    BrowserModule, ProductModule
  ],
  exports: [CartComponent],
  providers: [CartService],
})
export class CartModule { }
