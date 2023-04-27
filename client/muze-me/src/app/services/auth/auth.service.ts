import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, UserSignUpResponse } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(user: User): Observable<UserSignUpResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const body = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    return this.http.post<UserSignUpResponse>(
      environment.motherShipUrl + ':' + environment.apiPort + '/api/users/register/',
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
    return this.http.post<any>(
      environment.motherShipUrl + ':' + environment.apiPort + '/api/users/login/',
      body,
      httpOptions
    );
  }

  logout() {
    
  }

  get currentUser() {
    return
  }
}
