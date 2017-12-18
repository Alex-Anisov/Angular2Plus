import {Product} from '.';

export class ProductWithCount {
    public readonly product: Product;

    constructor(public count: number, product: Product) {
        this.product = product;
    }
}
