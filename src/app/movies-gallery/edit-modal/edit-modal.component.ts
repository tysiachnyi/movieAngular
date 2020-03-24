import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  form: FormGroup;
  modalRef: BsModalRef;

  constructor(
      public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [])
    });
  }


  submit() {
    const formData = {...this.form.value};
    console.log(formData);
    localStorage.setItem('userName', formData.name);
    this.form.reset();
    window.location.reload();
  }
}
