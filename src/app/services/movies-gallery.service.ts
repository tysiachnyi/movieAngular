import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movies} from '../shared/models/movies';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesGalleryService {
  movies: Movies[] = [];
  likedMovies: Movies[] = [];
  likedMovie;
  localStorageData: any[] = JSON.parse(localStorage.getItem('likedMovies'));

  constructor(private http: HttpClient) {}

  fetchMovies() {
     this.http.get<Movies[]>(
        'http://my-json-server.typicode.com/moviedb-tech/movies/list')
         .subscribe(response => {
          this.movies = response;
           // tslint:disable-next-line:prefer-for-of
          for (const i of this.localStorageData) {
              this.addFav(i, true);
            }
     });
  }

  addFav(id: number, inLoad?: boolean) {
    const found = this.likedMovies.some(el => el.id === id);
    if (!found) {
      this.likedMovies = this.likedMovies
          .concat(this.movies
              .find(d => d.id === id));
      this.likedMovie = this.movies.find(el => el.id === id);
      this.likedMovie.onFav = true;
      if (!inLoad) {
        this.localStorageData = this.likedMovies.map(item => item.id);
        localStorage.setItem('likedMovies', JSON.stringify(this.localStorageData));
      }
    }
  }

  removeFav(id: number) {
    const found = this.likedMovies.some(el => el.id === id);
    if (found) {
      this.likedMovies = this.likedMovies
          .filter(d => d.id !== id);
      this.likedMovie = this.movies.find(el => el.id === id);
      this.likedMovie.onFav = false;
      this.localStorageData = this.localStorageData.filter(d => d !== id);
      localStorage.setItem('likedMovies', JSON.stringify(this.localStorageData));
    }
  }
}
