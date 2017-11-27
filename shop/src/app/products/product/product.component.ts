import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../shared/product.model';
import { CartService } from '../../carts/shared/cart.service';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() product: Product;

   public addToCart() {
    this.cartService.addToCart(this.product);
    this.productService.removeProductFromStock(this.product);
  }

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit() {
  }

  public inStockCount(product: Product): number {
    return this.productService.productsInStock(product);
  }

  public isAvailableInStock(product: Product): boolean {
    return this.productService.productsInStock(product) > 0;
  }
}
