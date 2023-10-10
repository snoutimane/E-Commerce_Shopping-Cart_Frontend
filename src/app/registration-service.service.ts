import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { User } from './Models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private _http: HttpClient) { }

  public registerUserFromRemote(user: User): Observable<HttpResponse<any>> {
    return this._http.post<any>("http://localhost:8083/users/addUser", user, { observe: 'response' }).pipe(
      catchError(this.handleError)
    );
  }

  public loginFromRemote(user: User): Observable<string> {
    return this._http.post('http://localhost:8083/users/login', user, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      map((response: HttpResponse<any>) => {
        const token = response.headers.get('Authorization');
        return token || '';
      }),
      catchError((error: any) => throwError('Authentication failed: ' + error))
    );

  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
