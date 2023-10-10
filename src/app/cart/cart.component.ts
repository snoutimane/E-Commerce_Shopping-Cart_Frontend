import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Models/cart-item';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCartItemsFromRemote().subscribe(
      (item: CartItem[]) => {
        this.cartItems = item;
      },
      (error) => {
        console.error('Failed to fetch cart items:', error);
      }
    );
  }
}
