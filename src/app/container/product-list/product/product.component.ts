import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

 @Input() 
 product: {
  id:number,
  name: string,
  brand:string,
  gender:string,
  category?:string,
  color:string[],
  price: number,
  discountPrice?:number,
  is_in_inventry:boolean,
  item_left:number,
  pImage:string,
 };
}
