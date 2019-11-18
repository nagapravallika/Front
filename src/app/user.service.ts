import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse} from '@angular/common/http';
import { User } from './user';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from 'util';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  apiUrl = 'http://localhost:8080/user/saveuser';
  

  httpOptios = {
    headers: new HttpHeaders({ 'content-type': 'application/json'})
  }

  constructor(private _http: HttpClient) { }

  getUser(){
    return this._http.get<User>(this.apiUrl)
   
  }


  createPost(user: User) {
    return this._http.post<User>(this.apiUrl, user, this.httpOptios)
    
  }

  
  }

