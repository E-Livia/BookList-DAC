import { Injectable } from '@angular/core';
import { Book } from './book';

import { Observable } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookListService {

    private membersUrl = 'http://localhost:44340/api/books';

    private tableList: Book[]=[
        {title:'s',author:'s',year:1990,description:'sadsadsadsadsadsadasdsddadsadsadsadsa dasadsadsadsad sadsadsadsadsdsadsdsadsa sdsadass dsadsadsads asdasdasdasdas',rating:5},
        {title:'s',author:'s',year:1990,description:'s',rating:5}
    ];

    constructor(private httpClient: HttpClient) { }

    getTableList(): Book[] {
        return this.tableList;
    }

    addBook(book : Book) {
        // send book to backend

        this.tableList.push(book);
        for (const b of this.tableList)
            console.log(b.author);
        const url = `${this.membersUrl}/add`; 
    
        return this.httpClient.post(url, book).subscribe();
        
    }

    getBooks(): Observable<Book[]> {
        // api/books
        return this.httpClient.get<Book[]>(this.membersUrl);
    }

    setBook(booktable:Book[]):void{
        this.tableList = booktable;
      }
}