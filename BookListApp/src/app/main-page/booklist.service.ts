import { Injectable } from '@angular/core';
import { Book } from './book';

import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class BookListService {

    private tableList: Book[]=[
        {title:'s',author:'s',year:1990,description:'sadsadsadsadsadsadasdsddadsadsadsadsa dasadsadsadsad sadsadsadsadsdsadsdsadsa sdsadass dsadsadsads asdasdasdasdas',rating:5},
        {title:'s',author:'s',year:1990,description:'s',rating:5}
    ];

    constructor() { }

    getTableList(): Book[] {
        return this.tableList;
    }

    addBook(book : Book) {
        this.tableList.push(book);
        for (const b of this.tableList)
            console.log(b.author);
    }

    setBook(booktable:Book[]):void{
        this.tableList = booktable;
      }
}