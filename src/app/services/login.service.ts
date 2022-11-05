import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string, oneTimeToken: string) {
    this.http
      .post<any>('http://localhost:5000/api/login', JSON.stringify({
        email: email,
        password: password,
        oneTimeToken: oneTimeToken,
      }))
      .subscribe((data) => {console.log(data)});
  }
}
