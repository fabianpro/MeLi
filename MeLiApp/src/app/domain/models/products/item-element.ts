import { Price } from './price';

export class ItemElement {
    id!:            string;
    title!:         string;
    price!:         Price;
    picture!:       string;
    condition!:     string;
    free_shipping!: boolean;
    sold_quantity!: number;
    description!:   string;
}