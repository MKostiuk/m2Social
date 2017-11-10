import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';
import 'rxjs/add/operator/retry';

@Injectable()
export class PostServiceService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts').retry(3);
  }

  get(id: number): Observable<Post> {
    return this.http.get<Post>('/api/posts/' + id).retry(3);
  }

  getComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>('/api/posts/' + id + '/comments').retry(3);
  }
}
