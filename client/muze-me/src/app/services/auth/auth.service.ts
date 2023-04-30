import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  User,
  UserSignUpResponse,
} from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(username:string, email:string, password:string): Observable<UserSignUpResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const body = {
      username: username,
      email: email,
      password: password,
    };
    return this.http.post<UserSignUpResponse>(
      environment.motherShipUrl +
        ':' +
        environment.apiPort +
        '/api/users/register/',
      body,
      httpOptions
    );
  }

  signInWithEmail(email: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const body = {
      email: email,
      password: password,
    };
    console.log(body); //TODO: remove
    return this.http.post<any>(
      environment.motherShipUrl +
        ':' +
        environment.apiPort +
        '/api/users/login/',
      body,
      httpOptions
    );
  }

  logout() {}

  getUser() {
    const httpOptions = {
      //send jtw token cookie
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<User>(
      environment.motherShipUrl +
        ':' +
        environment.apiPort +
        '/api/users/profile/',
      httpOptions
    );

    /*
      should return
      {
      "id": 1,
      "username": "max",
      "email": "max@mail.com",
      "profile_pic": null,
      "news_tollerance": 2
      }
    */
  }
}
