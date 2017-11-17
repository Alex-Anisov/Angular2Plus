import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductModule } from './app/products/product.module';
import { CartModule } from './app/carts/cart.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './app/products/product-list/product-list.component';
import { CartComponent } from './app/carts/cart/cart.component';

/*import {ProductService} from './app/modules/product/services/product/product.service';
import {CartService} from './app/modules/cart/services/cart/cart.service';
import { CartComponent } from './app/modules/cart/components/cart/cart.component';

import { CartModule } from './app/modules/cart/cart.module';*/


@NgModule({
  declarations: [
    AppComponent, ProductListComponent
  ],
  imports: [
    BrowserModule, ProductModule, CartModule
  ],
  exports: [ProductModule, CartModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
