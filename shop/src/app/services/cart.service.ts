import { Injectable } from '@angular/core';
import { Product, ProductWithCount } from '../models';
import {} from '../shared/product-with-count.model';
import { ProductService } from './product.service';

@Injectable()
export class CartService {
  private productsInCart: Array<ProductWithCount>;

  constructor(private productService: ProductService) {
    this.productsInCart = new Array<ProductWithCount>();
  }

  getProductsInCart(): Array<ProductWithCount> {
    return this.productsInCart;
  }

  addToCart(product: Product, count: number = 1) {
    const p = this.productsInCart.find(item => {
      return item.product.name === product.name;
    });
    if (p == null) {
      this.productsInCart.push(new ProductWithCount(count, product));
    } else {
      p.count += count;
    }
  }

  getProductsCount() {
    return this.productsInCart.length;
  }

  getProductsSum() {
    return this.productsInCart.map(p => p.product.price * p.count).reduce(function(sum, val){
      return sum + val;
    });
  }

  getProductNames() {
    return this.productsInCart.map(p => p.product.name);
  }

  removeByIndex(index: number) {
    this.productsInCart.splice(index, 1);
  }

  clearAll() {
    this.productsInCart.forEach(p => {
      this.productService.moveProductToStock(p.product, p.count);
    });
    this.productsInCart = new Array<ProductWithCount>();
  }

  removeProduct(product: Product) {
    const p = this.productsInCart.find(item => {
      return item.product.name === product.name;
    });
    p.count--;
    this.productService.moveProductToStock(p.product);
    if (p.count === 0) {
      const index = this.productsInCart.indexOf(p);
      this.productsInCart.splice(index, 1);
    }
  }
}
