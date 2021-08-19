import { Author } from './author';
import { ItemElement } from './item-element';

export class Response {
    author:     Author;
    categories!: any[];
    items:      ItemElement[];

    constructor() {
        this.author = new Author();
        this.items = new Array<ItemElement>();
    }
}



