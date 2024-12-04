import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../data/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseurl = '/api/user';
  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(this.baseurl + 'GetCurrentUser');
  }
}