import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductWithCount } from '../../../models';
import { ProductService, CartService } from '../../../services';
import { HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() CartItem: ProductWithCount;

  @HostBinding('class') itemClass;

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: Event) {
    this.itemClass = 'mouse-over';
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: Event) {
    this.itemClass = '';
  }

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit() {
  }

  removeItem(product: Product): void {
    this.cartService.removeProduct(product);
  }

  availableInStock(product: Product) {
    return this.productService.productsInStock(product);
  }

  addItem(product: Product) {
    this.cartService.addToCart(product);
    this.productService.removeProductFromStock(product);
  }
}
