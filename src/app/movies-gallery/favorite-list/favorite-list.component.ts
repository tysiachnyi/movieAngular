import { Component, OnInit } from '@angular/core';
import {MoviesGalleryService} from '../../services/movies-gallery.service';
import {Movies} from '../../core/models/movies';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
  favMovie: Movies[] = [];
  favicon = 'fa fa-trash-o';
  constructor(
      public moviesGalleryService: MoviesGalleryService
  ) { }

  ngOnInit() {
  }

  changeStyle($event) {
    this.favicon = $event.type === 'mouseover' ? 'fa fa-trash' : 'fa fa-trash-o';
  }

  deleteFav(id: number) {
    this.moviesGalleryService.removeFav(id);
  }
}
