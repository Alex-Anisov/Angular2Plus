import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductModule } from './components/products/products.module';
import { CartModule } from './components/cart/cart.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import {AppRoutingModule, appRouterComponents} from './app.routing.module';

import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    appRouterComponents
  ],
  imports: [
    BrowserModule,
    ProductModule,
    CartModule,
    ComponentsModule,
    AppRoutingModule
  ],
  exports: [ProductModule, CartModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
