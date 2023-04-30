import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getNews(page: number, tollerance:number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(
      environment.motherShipUrl +
        ':' +
        environment.apiPort +
        '/api/news/' +
        page + '/' + tollerance,
      httpOptions
    );
  }
}
