import {Categories} from './categories';
import {Ingridients} from './ingridients';

export class Product {

    constructor(
        public Id: number,
        public name: string,
        public description: string,
        public price: number,
        public category: Categories,
        public isAvailable: boolean,
        public ingridients: Array<Ingridients>,
        public additionalInfo: string = ''
    ) {
        this.additionalInfo = additionalInfo || 'no additional info';
    }
}
