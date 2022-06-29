import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserDTO } from './userDTO'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private membersUrl = 'http://localhost:44340/api/users';
  constructor(private httpClient: HttpClient) { }

  public postUser(user :UserDTO): Observable<any> {
    
    const url = `${this.membersUrl}/add`; 
    console.log(user);
    return this.httpClient.post(url, user);
  }

  public loginUser(email :string, password :string): Observable<UserDTO> {
    const url = `${this.membersUrl}/login`; 
    let param = new HttpParams().set('email', email).set('password', password);
    return this.httpClient.get<UserDTO>(url, {params : param});
  }

}