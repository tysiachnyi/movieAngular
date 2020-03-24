import {Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Movies} from '../shared/models/movies';
import {MoviesGalleryService} from '../services/movies-gallery.service';
import {ModalComponent} from './modal/modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-movies-gallery',
  templateUrl: './movies-gallery.component.html',
  styleUrls: ['./movies-gallery.component.scss']
})
export class MoviesGalleryComponent implements OnInit {
  modalRef: BsModalRef;
  column = 'col-12';


  constructor(public moviesGalleryService: MoviesGalleryService,
              private modalService: BsModalService,
              public authService: AuthService) { }


  ngOnInit() {
    this.moviesGalleryService.fetchMovies();
    if (this.authService.isAuth === 'auth') {
      this.column = 'col-10';
    }

  }

    showMore(movie: Movies) {
      this.modalRef = this.modalService.show(ModalComponent, {
          class: 'modal-lg',
          initialState: {
              movies: movie
          }
      });
    }

    addFav(id: number) {
      this.moviesGalleryService.addFav(id);
    }

    removeFav(id: number) {
      this.moviesGalleryService.removeFav(id);
    }
}
