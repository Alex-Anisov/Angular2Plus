import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModule } from '../products/products.module';

import { CartComponent, CartItemComponent } from '.';

import { CartService } from '../../services/';


@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [
    BrowserModule, ProductModule
  ],
  exports: [CartComponent],
  providers: [CartService],
})
export class CartModule { }
