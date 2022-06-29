import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookListService } from '../booklist.service';

import { MatDialog } from '@angular/material/dialog'
import { AddNewBookComponent } from '../add-new-book/add-new-book.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  public bookListTable: Book[] = [];
  displayedColumns: string[] = ['title', 'author', 'year', 'description', 'rating'];

  constructor(private tableService: BookListService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.bookListTable = this.tableService.getTableList();
  }

  clearData() {
    this.bookListTable = [];
  }

  // logout() {
  //   window.localStorage.removeItem("token");

  //   this.router.navigateByUrl('/auth');
  //   this._snackBar.open('Log out successfully!', '', {
  //     duration: 2000,
  //   })
  // }

  sortByRating () {

  }
  deleteBook () {

  }

  addBook () {
    this.dialog.open(AddNewBookComponent);
  }
}
