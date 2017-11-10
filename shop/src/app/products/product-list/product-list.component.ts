import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ProductService} from '../product/product.service'
import {Product} from '../shared/product.model'
import {ProductComponent} from '../product/product.component'

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    console.log(this.products.length);
  }
}
