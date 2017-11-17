import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../shared/product.model';
import { CartService } from '../../carts/shared/cart.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() product: Product;

   public addToCart() {
    this.cartService.addToCart(this.product);
  }

constructor(private cartService: CartService) { }

  ngOnInit() {
  }
}
