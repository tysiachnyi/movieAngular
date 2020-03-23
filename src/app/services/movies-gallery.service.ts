import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movies} from '../core/models/movies';
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
          console.log(this.localStorageData);
           // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < this.localStorageData.length; i++) {
              this.addFav(this.localStorageData[i], true);
            }
     });

  }

  addFav(id: number, inLoad?: boolean) {
    console.log(id);
    const found = this.likedMovies.some(el => el.id === id);
    if (!found) {
      this.likedMovies = this.likedMovies
          .concat(this.movies
              .find(d => d.id === id));
      this.likedMovie = this.movies.find(el => el.id === id);
      this.likedMovie.onFav = true;
      if (!inLoad) {
        this.localStorageData = this.likedMovies.map(item => item.id);
        console.log(this.localStorageData);
        localStorage.setItem('likedMovies', JSON.stringify(this.localStorageData));
      }
    }
  }

  removeFav(id: number) {
    console.log(id);
    const found = this.likedMovies.some(el => el.id === id);
    if (found) {
      this.likedMovies = this.likedMovies
          .filter(d => d.id !== id);
      console.log(this.likedMovies);
      this.likedMovie = this.movies.find(el => el.id === id);
      this.likedMovie.onFav = false;
      this.localStorageData = this.localStorageData.filter(d => d !== id);
      localStorage.setItem('likedMovies', JSON.stringify(this.localStorageData));
    }
  }

}
