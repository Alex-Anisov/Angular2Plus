import { Injectable } from '@angular/core';
import {Product} from '../shared/product.model'
import {Categories} from '../shared/categories'
import {Ingridients} from '../shared/ingridients'

@Injectable()
export class ProductService {

  constructor() { }

  public getProducts(): Array<Product>{
    return [
      new Product("Product 1", "Product 1 description", 1000, Categories.Primary, true, [Ingridients.Pepper, Ingridients.Potato]),
      new Product("Product 2", "Product 2 description", 2000, Categories.Secondary, true, [Ingridients.Tomato, Ingridients.Potato]),
      new Product("Product 3", "Product 3 description", 3000, Categories.Secondary, true, [Ingridients.Tomato, Ingridients.Pepper])
    ];
  }

}
