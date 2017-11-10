import {Categories} from './categories'
import {Ingridients} from './ingridients'

export class Product{

    name: string;
    description: string;
    price: number;
    category: Categories;
    isAvailable: boolean;
    ingridients: Array<Ingridients>;

    constructor(
        name: string,
        description: string,
        price: number,
        category: Categories,
        isAvailable: boolean,
        ingridients: Array<Ingridients>)
        {
            this.name = name;
            this.description = description;
            this.price = price;
            this.category = category;
            this.isAvailable = isAvailable;
            this.ingridients = ingridients;
    }
}