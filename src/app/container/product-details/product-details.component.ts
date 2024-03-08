import { Component } from '@angular/core';
import { Products } from '../Models/Products';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
 
  selectedProduct:Products
}
