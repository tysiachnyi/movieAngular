import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movies} from '../../core/models/movies';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  title;
  constructor(
      public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
