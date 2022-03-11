import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators'
import { throwError } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  body: {}
}

@Injectable({
  providedIn: 'root'
})
export class R2timingService {

  constructor(private http: HttpClient) { }

  get(metodo: string): Promise<any> {
    return this.http
    .get(environment.apiUrl + metodo + '/findAll').pipe(tap(_ => R2timingService.log('get' + metodo)), catchError(R2timingService.handleError)).toPromise();
  }

  post(metodo: string, data: any): Promise<any> {
    return this.http
    .post(environment.apiUrl + metodo + '/createOrUpdate', data).pipe(tap(_ => R2timingService.log('post' + metodo)), catchError(R2timingService.handleError)).toPromise();
  }

  private static log(message: string): any {
    console.log(message);
  }

  private static handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `${error.status}`;
    }
  
    return throwError(errorMessage);
  }
}
