import { Injectable } from '@angular/core';
import { BookListInterface } from './bookList-interface';

@Injectable({
    providedIn: 'root'
})
export class BookListService {

    private tableList: BookListInterface[]=[
        {title:'s',author:'s',year:1990,description:'s',rating:5},
        {title:'s',author:'s',year:1990,description:'s',rating:5}
    ];

    constructor() { }

    getTableList(): BookListInterface[] {
        return this.tableList;
    }

    setDogs(booktable:BookListInterface[]):void{
        this.tableList = booktable;
      }
}