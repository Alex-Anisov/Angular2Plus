import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {Product} from '../../../models';
import { ProductService, CartService } from '../../../services';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  product: Product;

   public addToCart() {
    this.cartService.addToCart(this.product);
    this.productService.removeProductFromStock(this.product);
  }

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.product = new Product(null, '', '', null, null, false, null);
    this.route.paramMap
    .switchMap((params: Params) => this.productService.getProduct(+params.get('id')))
    .subscribe(
      product => this.product = Object.assign({}, product),
      err => console.log(err)
    );
  }

  public inStockCount(product: Product): number {
    return this.productService.productsInStock(product);
  }

  public isAvailableInStock(product: Product): boolean {
    return this.productService.productsInStock(product) > 0;
  }
}
