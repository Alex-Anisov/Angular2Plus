import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Product} from '../../products/shared/product.model';
import {CartService} from '../shared/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public  getProducts(): Array<Product> {
    return this.cartService.getProductsInCart();
  }

  public getProductsCount(): number {
    return this.cartService.getProductsCount();
  }

  public getProductNames(): Array<string> {
    return this.cartService.getProductNames();
  }

  public getAmmount(): number {
    return this.cartService.getProductsSum();
  }

  public removeFromCart(index: number) {
    this.cartService.removeByIndex(index);
  }

  public clearAll() {
    this.cartService.clearAll();
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}
