import { Injectable } from '@angular/core';
import {Product, ProductWithCount, Categories, Ingridients} from '../models';

@Injectable()
export class ProductService {

  private products: Array<Product> = [
    new Product(1, 'Product 1', 'Product 1 description', 1000, Categories.Primary, true, [Ingridients.Pepper, Ingridients.Potato]),
    new Product(2, 'Product 2', 'Product 2 description', 2000, Categories.Secondary, true, [Ingridients.Tomato, Ingridients.Potato]),
    new Product(3, 'Product 3', 'Product 3 description', 3000, Categories.Secondary, true, [Ingridients.Tomato, Ingridients.Pepper])
  ];

  private availableProducts: Array<ProductWithCount>;

  constructor() {
    // generate some random product counts
    this.availableProducts = new Array<ProductWithCount>();
    this.products.forEach( p => {
      const cnt  = Math.trunc(Math.random() * 10 + 5);
      this.availableProducts.push(new ProductWithCount(cnt, p));
    });
  }

  public getProducts(): Array<Product> {
    return this.products;
  }

  public productsInStock(product: Product): number {
      return this.availableProducts.find(item => {
        return item.product.Id === product.Id;
      }).count;
  }

  public removeProductFromStock(product: Product, count: number = 1): void {
    this.availableProducts.find(item => {
      return item.product.name === product.name;
    }).count -= count;
  }

  public moveProductToStock(product: Product, count: number = 1): void {
    this.availableProducts.find(item => {
      return item.product.name === product.name;
    }).count += count;
  }

  public getProduct(productId: number): Promise<Product> {
    return Promise.resolve(this.products.find(p => p.Id === productId));
  }
}
