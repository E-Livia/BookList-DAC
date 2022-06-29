import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookListInterface } from '../bookList-interface';
import { BookListService } from '../booklist.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  public bookListTable: BookListInterface[] = [];
  displayedColumns: string[] = ['title', 'author', 'year', 'description', 'rating'];

  constructor(private tableService: BookListService) { }

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
}
