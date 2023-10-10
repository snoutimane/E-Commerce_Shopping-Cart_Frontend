import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Models/cart-item';
import { Products } from 'src/app/Models/products';
import { User } from 'src/app/Models/user';
import { CartService } from 'src/app/cart.service';
import { ProductServiceService } from 'src/app/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  shoppingItems: Products[] = [];
  user=new User();
  constructor(private productService: ProductServiceService, private cartService:CartService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.DisplayProductsFromRemote().subscribe(
      (products: Products[]) => {
        this.shoppingItems = products;
      },
      (error) => {
        console.error('Failed to fetch products:', error);
      }
    );
  }

  addToCart(item: Products) {
    const cartItem: CartItem = {
      productId: item.productId,
      productName: item.productName,
      price: item.price,
      quantity: 1,
      cartId: 1,
      emailId:this.user.emailId,
      image: item.image,
      totalAmount: item.price // You can set the quantity as per your requirement
    };
  
    this.cartService.AddToCartFromRemote(cartItem).subscribe(
      (response: any) => {
        console.log('Item added to cart:', response);
        // Perform any additional actions if needed
      },
      (error: any) => {
        console.error('Failed to add item to cart:', error);
      }
    );
  }
  
}
