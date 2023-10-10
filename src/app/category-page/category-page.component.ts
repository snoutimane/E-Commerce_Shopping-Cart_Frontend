import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Products } from '../Models/products';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  category!: string;
  products: Products[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.fetchProductsByCategory();
    });
  }

  fetchProductsByCategory() {
    this.productService.DisplayProductsByCategoryFromRemote(this.category).subscribe(
      (response: Products[]) => {
        this.products = response;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
