import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../shared/product.model'
import {CartService} from '../../cart/cart.service'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() product: Product;

  public addToCart(){
    this.cartService.addToCart(this.product);
  }

  constructor(private cartService: CartService) { 
  }

  ngOnInit() {
  }
}
