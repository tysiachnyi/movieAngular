import {Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Movies} from '../core/models/movies';
import {MoviesGalleryService} from '../services/movies-gallery.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from './modal/modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-movies-gallery',
  templateUrl: './movies-gallery.component.html',
  styleUrls: ['./movies-gallery.component.scss']
})
export class MoviesGalleryComponent implements OnInit {
  movies: Movies[] = [];
  modalRef: BsModalRef;


  constructor(private moviesGalleryService: MoviesGalleryService,
              private modalService: BsModalService) { }


  ngOnInit() {
    this.moviesGalleryService.fetchMovies()
        .subscribe(movies => {
          this.movies = movies;
          console.log(this.movies);
        });
  }

    showMore() {
        this.modalRef = this.modalService.show(ModalComponent, {
            initialState: {
                title: 'Modal Title',
                data: {}
            }
        });
    }


    // showMore(movie: Movies) {
    //     const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    //     this.refDir.containerRef.clear();
    //
    //     const component = this.refDir.containerRef.createComponent(modalFactory);
    //     component.instance.movies = movie;
    //     component.instance.close.subscribe(() => {
    //         this.refDir.containerRef.clear();
    //     });
    //
    // }

}
