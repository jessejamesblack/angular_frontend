import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.pattern('[ -~]*'), Validators.required]),
  });

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  oneTimeToken: string = '';

  constructor() {}

  ngOnInit(): void {}

  login() {
    // call Go backend port 8080 api/login
    if (this.form.valid) {
      this.oneTimeToken = moment().hour() + ':' + moment().minute();
      console.log('login' + this.oneTimeToken);
    }
  }
}
