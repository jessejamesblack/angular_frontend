import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern('[ -~]')),
  });

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }


  error: string = '';

  constructor() {}

  ngOnInit(): void {}

  login() {
    // call Go backend port 8080 api/login
    if (this.form.valid) {
      console.log('login');
    }
  }
}
