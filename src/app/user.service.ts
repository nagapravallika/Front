import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse} from '@angular/common/http';
import { User } from './user';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { error } from 'util';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
 

  apiUrl = 'http://localhost:8080/user/saveuser';
  serverUrl = 'http://localhost:8080/user/getUser/ramya98@gmail.com';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
       
  

  constructor(private httpClient: HttpClient) { }

  // getUser(){
  //   console.table(this._http.get<User>(this.serverUrl))
  //   return this._http.get<User>(this.serverUrl)
   
  // }

  addUser(first_name, last_name, gender, email,phone_no, password) {
    const obj = {
      first_name:first_name,
      last_name:last_name,
      gender:gender,
      email:email,
      phone_no:phone_no,
      password:password
    };
    console.log(obj);
    this.http.post(`${this.apiUri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }


  
  
  }

