import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Books } from './data.model'


@Injectable({
  providedIn: 'root'
})


export class DashboardService {
  toggleMenu: boolean = true ;
  constructor(private httpClient: HttpClient) { }
  apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep';

  getData(): Observable<Books[]> {
    return this.httpClient.get<Books[]>(`${this.apiUrl}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
