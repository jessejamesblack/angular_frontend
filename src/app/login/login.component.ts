import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { LoginService } from '../services/login.service';

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

  errorMessage: string = '';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    // call Go backend port 8080 api/login
    if (this.form.valid) {
      const oneTimeToken = moment().hour() + ':' + moment().minute();
        this.loginService.login(this.form.controls['email'].value, this.form.controls['password'].value, oneTimeToken)
        .subscribe((data) => {
          if(data.message === "Status OK") {
            window.location.href = "http://onecause.com/";
          }
        }, (err) => {
          this.errorMessage = 'Unauthorized Login';
          console.log(err)
        });
    }
  }
}
