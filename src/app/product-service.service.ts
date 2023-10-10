import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Products } from './Models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _http: HttpClient) { }

  public DisplayProductsFromRemote(): Observable<Products[]> {
    return this._http.get<Products[]>("http://localhost:8082/products/viewAllProducts").pipe(
      catchError(this.handleError)
    );
  }

  public DisplayProductsByCategoryFromRemote(category:string): Observable<Products[]> {
    return this._http.get<Products[]>("http://localhost:8082/products/viewProductsByCategory/${category}").pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
