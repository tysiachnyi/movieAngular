import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesGalleryComponent } from './movies-gallery/movies-gallery.component';
import { FavoriteListComponent } from './movies-gallery/favorite-list/favorite-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './movies-gallery/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MoviesGalleryComponent,
    FavoriteListComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ModalModule.forRoot()
  ],
  entryComponents: [ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
