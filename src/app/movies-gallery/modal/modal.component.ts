import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movies} from '../../shared/models/movies';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {MoviesGalleryService} from '../../services/movies-gallery.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  movies: Movies
  constructor(
      public moviesGalleryService: MoviesGalleryService,
      public modalRef: BsModalRef,
      public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
