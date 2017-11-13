import {Categories} from './categories'
import {Ingridients} from './ingridients'

export class Product{

    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: Categories,
        public isAvailable: boolean,
        public ingridients: Array<Ingridients>){}
}