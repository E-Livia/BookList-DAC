import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private router: Router, private _snackBar: MatSnackBar,private http: HttpClient) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  register() {
    const body ={
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    }


    this.http.post("https://reqres.in/api/register", body).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigateByUrl('');
        this._snackBar.open('Register Successfully!', '', {
          duration: 2000,
        });
      },
      (error) => {
        console.error(error);
        this._snackBar.open(error.error.error, '', {
          duration: 2000,
        });
      }
    )
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
