import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesGalleryComponent } from './movies-gallery/movies-gallery.component';
import { FavoriteListComponent } from './movies-gallery/favorite-list/favorite-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ModalComponent } from './movies-gallery/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from './auth/login-modal/login-modal.component';
import { RegistrationModalComponent } from './auth/registration-modal/registration-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditModalComponent } from './movies-gallery/edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesGalleryComponent,
    FavoriteListComponent,
    ModalComponent,
    LoginModalComponent,
    RegistrationModalComponent,
    EditModalComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  entryComponents: [ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
