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
  hide=true;

  constructor(private router: Router, private _snackBar: MatSnackBar, private http: HttpClient,
    private service: AuthServiceService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirmedPassword: new FormControl(null, Validators.required)
    });
  }

  postUser() {
    let user = new UserDTO(this.getFirstName?.value, this.getLastName?.value, this.getEmail?.value,
      this.getPassword?.value);

    let confirmPassword : Boolean= this.checkPassword(user.password);
    if (confirmPassword == true)
      this.service.postUser(user).subscribe();
    else
      this._snackBar.open("Confirmed password is not equal to initial password!", '', {
         duration: 2000,
      });

    
  }


  checkPassword(password : string) : boolean
  {
    if (password == this.getConfirmedPassword?.value)
        return true;
    return false;
  }

  get getEmail() {
    return this.registerForm.get('email');
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
