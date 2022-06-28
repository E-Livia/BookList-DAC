import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserDTO } from '../userDTO';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private router: Router, private _snackBar: MatSnackBar,private http: HttpClient,
    private service:AuthServiceService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      confirmedPassword: new FormControl(null, Validators.required)
    });
  }

  get getEmail() {
    return this.registerForm.get('email');
  }

  postUser()
  {
    
      let user = new UserDTO(this.getFirstName?.value, this.getLastName?.value, this.getEmail?.value,
        this.getPassword?.value);
       
    
      this.service.postUser(user).subscribe();
      this._snackBar.open(this.getFirstName?.value, '', {
        duration: 2000,
      });
      
  }

  get getPassword() {
    return this.registerForm.get('password');
  }

  get getLastName() {
    return this.registerForm.get('lastName');
  }

  get getFirstName() {
    return this.registerForm.get('firstName');
  }

  get getConfirmedPassword() {
    return this.registerForm.get('confirmedPassword');
  }
}
