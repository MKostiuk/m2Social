import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>('/api/users').retry(3);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>('/api/users/' + id).retry(3);
  }

}
