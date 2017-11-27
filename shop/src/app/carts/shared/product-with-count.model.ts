import {Product} from '../../products/shared/product.model';

export class ProductWithCount {
    public readonly product: Product;

    constructor(public count: number, product: Product) {
        this.product = product;
    }
}
