import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss']
})
export class RegistrationModalComponent implements OnInit {
  form: FormGroup;
  localStorageData: any[];
  constructor(
      public modalRef: BsModalRef
  ) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      name: new FormControl('', [
          Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    });
  }

  submit() {
    if (this.form.valid) {
    const formData = {...this.form.value};
    this.localStorageData = [formData.name, formData.password];
    localStorage.setItem(formData.email, JSON.stringify(this.localStorageData));
    this.form.reset();
    this.modalRef.hide();
    }

  }
}
