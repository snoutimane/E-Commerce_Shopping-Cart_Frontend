import { Component } from '@angular/core';

@Component({
  selector: 'app-product-catlogue',
  templateUrl: './product-catlogue.component.html',
  styleUrls: ['./product-catlogue.component.css']
})
export class ProductCatlogueComponent {
  
 shoppingItems: any[] = [
    {
      title: 'Nail Polish',

      image: 'assets/images/products/Image (1).jpeg',

      description: 'Nude shade gel based nail polish',

      price: '$49.50',

      rating: 4.05

    },

    {

      title: 'Makeup brushes',

      image: 'assets/images/products/Image (2).jpg',

      description: 'Set of brushes',

      price: '$13.95',

      rating: 4.56

    },

 

    {

      title: 'Ankle length shoes',

      image: 'assets/images/products/Image (3).jpeg',

      description: 'White faux leather ankle length shoes',

      price: '$128.99',

      rating: 4.87

    },

 

    {

      title: 'Portable Typewriter',

      image: 'assets/images/products/Image (4).jpg',

      description: 'Vintage collection portable typewriter',

      price: '$12.48',

      rating: 4.99

    },

 

    {

      title: 'Iphone',

      image: 'assets/images/products/Image (5).jpg',

      description: 'Description of Item 5',

      price: '$12.48',

      rating: 4.99

    },

 

    {

      title: 'Cough Syrup',

      image: 'assets/images/products/Image (6).jpg',

      description: 'Description of Item 6',

      price: '$128.99',

      rating: 4.87

    },

 

    {

      title: 'Show piece',

      image: 'assets/images/products/Image (7).jpeg',

      description: 'Description of Item 7',

      price: '$13.95',

      rating: 4.56

    },

 

    {

      title: 'Diary',

      image: 'assets/images/products/Image (8).jpg',

      description: 'Description of Item 8',

      price: '$9.50',

      rating: 4.77

    },

 

    {

      title: 'Jeans',

      image: 'assets/images/products/Image (9).jpg',

      description: 'Description of Item 9',

      price: '$128.99',

      rating: 4.87

    },

 

    {

      title: 'Gift box',

      image: 'assets/images/products/Image (10).jpeg',

      description: 'Description of Item 10',

      price: '$11.68',

      rating: 4.99

    },

 

    {

      title: 'Japnese style tea kettle',

      image: 'assets/images/products/Image (11).jpg',

      description: 'Description of Item 11',

      price: '$1.25',

      rating: 4.77

    },

 

    {

      title: 'Bonsai plant',

      image: 'assets/images/products/Image (12).jpeg',

      description: 'Description of Item 12',

      price: '$23.25',

      rating: 4.56

    },

  ];
  
}
