import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Products } from '../Models/products';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  categories: string[] = ['Fashion', 'Electronics', 'Beauty', 'Mobiles', 'Home', 'Furniture', 'Pharmacy', 'Stationary'];

  constructor(private productService: ProductServiceService, private router: Router) {}

  displayProductsByCategory(category: string) {
    this.productService.DisplayProductsByCategoryFromRemote(category).subscribe(
      (products: Products[]) => {
        this.router.navigate(['/category', category], { state: { products: products } });
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
