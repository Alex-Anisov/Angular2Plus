import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsComponent, ProductComponent } from '.';
import { ProductService } from '../../services';
import { Product } from '../../models';

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
