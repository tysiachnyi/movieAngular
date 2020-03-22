import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movies} from '../core/models/movies';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesGalleryService {

  constructor(private http: HttpClient) {}

  fetchMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(
        'http://my-json-server.typicode.com/moviedb-tech/movies/list');
  }

}
