import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductService } from './shared/product.service';

import {Product} from './shared/product.model';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [ProductComponent],
  providers: [ProductService]
})
export class ProductModule { }
