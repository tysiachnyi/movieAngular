import {Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Movies} from '../core/models/movies';
import {MoviesGalleryService} from '../services/movies-gallery.service';
import {ModalComponent} from './modal/modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-movies-gallery',
  templateUrl: './movies-gallery.component.html',
  styleUrls: ['./movies-gallery.component.scss']
})
export class MoviesGalleryComponent implements OnInit {
  modalRef: BsModalRef;


  constructor(public moviesGalleryService: MoviesGalleryService,
              private modalService: BsModalService) { }


  ngOnInit() {
    this.moviesGalleryService.fetchMovies();
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
