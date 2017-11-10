import { Injectable } from '@angular/core';
import {Product} from '../products/shared/product.model'

@Injectable()
export class CartService {
  
  private productsInCart: Array<Product>

  addToCart(product: Product){
    this.productsInCart.push(product);
  }

  getProductsCount(){
    return this.productsInCart.length;
  }

  getProductsSum(){
    return this.productsInCart.map(p => p.price).reduce(function(sum, val){
      return sum + val;
    })
  }

  getProductNames(){
    return this.productsInCart.map(p => p.name);
  }

  removeByIndex(index: number){
    this.productsInCart.splice(index, 1);
  }

  clearAll(){
    this.productsInCart = new Array<Product>();
  }

  constructor() { 
    this.productsInCart = new Array<Product>();
  }

}
