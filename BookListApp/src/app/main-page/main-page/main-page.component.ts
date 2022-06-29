import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  logout() {
    window.localStorage.removeItem("token");

    this.router.navigateByUrl('/auth');
    this._snackBar.open('Log out successfully!', '', {
      duration: 2000,
    })
  }
}
