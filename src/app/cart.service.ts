import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { CartItem } from './Models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http: HttpClient) { }

  public AddToCartFromRemote(cartItem: CartItem): Observable<any> {
    return this._http.post<any>("http://localhost:8081/cart/addToCart", cartItem).pipe(
      catchError(this.handleError)
    );
  }

  public getCartItemsFromRemote(): Observable<any> {
    return this._http.get<any>("http://localhost:8081/cart/viewCart").pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
