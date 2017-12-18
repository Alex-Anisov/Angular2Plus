import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';

import {ProductComponent} from '.';
import { Product } from '../../models';
import { ProductService } from '../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  viewDetails(id: number) {
    const link = ['/product', id];
    this.router.navigate(link);
  }
}
