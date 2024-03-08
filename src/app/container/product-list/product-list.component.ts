import { Component, Input } from '@angular/core';
import { Products } from '../Models/Products';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  name="Naeem Sardar";
  addToCart:number = 0;
 
  getDiscountedPrice() {
    // return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onNameChange(event: any){

    this.name = event.target.value;
    //console.log(event.target.value);
  }

  decrementCartValue(){
    if(this.addToCart >0){
      this.addToCart--;
    }
  }

  incrementCartValue(){
    // if(this.addToCart < this.product.is){
    //   this.addToCart++;
    // }
  }

  selectedProduct:Products
  products =[
    {
      id:1,
      name: 'Nike nike_Shoes_1',
      brand:'NIKE',
      gender:'Women',
      category:"Running",
      color:["White","Red","Black","Blue","Brown"],
      price: 110,
      discountPrice:10,
      is_in_inventry:true,
      item_left:3,
      pImage: './assets/nike_Shoes_1.png',
    },
    {
      id:2,
      name: 'Nike nike_Shoes_2',
      brand:'NIKE',
      gender:'Men',
      category:"Running",
      color:["White","Red","Black"],
      price: 120,
      discountPrice:20,
      is_in_inventry:false,
      item_left:4,
      pImage: './assets/nike_Shoes_2.png',
    },
    {
      id:3,
      name: 'Nike nike_Shoes_3',
      brand:'NIKE',
      gender:'Women',
      category:"Running",
      color:["White","Red","Black"],
      price: 130,
      discountPrice:30,
      is_in_inventry:true,
      item_left:5,
      pImage: './assets/nike_Shoes_3.png',
    },
    {
      id:4,
      name: 'Nike nike_Shoes_4',
      brand:'NIKE',
      gender:'Women',
      category:"Running",
      color:["White","Red","Black"],
      price: 140,
      discountPrice:30,
      is_in_inventry:true,
      item_left:5,
      pImage: './assets/nike_Shoes_4.png',
    },
    {
      id:5,
      name: 'Nike nike_Shoes_5',
      brand:'NIKE',
      gender:'Men',
      category:"Running",
      color:["White","Red","Black"],
      price: 150,
      discountPrice:40,
      is_in_inventry:true,
      item_left:6,
      pImage: './assets/nike_Shoes_5.png',
    },
    {
      id:6,
      name: 'Nike nike_Shirt_1',
      brand:'NIKE',
      gender:'Women',
      category:"Casual",
      color:["White","Red","Black","Blue","Brown"],
      price: 110,
      discountPrice:10,
      is_in_inventry:true,
      item_left:3,
      pImage: './assets/nike_Shirt_1.png',
    },
    {
      id:7,
      name: 'Nike nike_Shirt_2',
      brand:'NIKE',
      gender:'Men',
      category:"Casual",
      color:["White","Red","Black"],
      price: 120,
      discountPrice:20,
      is_in_inventry:false,
      item_left:0,
      pImage: './assets/nike_Shirt_2.png',
    },
    {
      id:8,
      name: 'Nike nike_Shirt_3',
      brand:'NIKE',
      gender:'Men',
      category:"Casual",
      color:["White","Red","Black"],
      price: 130,
      discountPrice:30,
      is_in_inventry:true,
      item_left:5,
      pImage: './assets/nike_Shirt_3.png',
    },
    {
      id:9,
      name: 'Nike nike_Shirt_4',
      brand:'NIKE',
      gender:'Men',
      category:"Casual",
      color:["White","Red","Black"],
      price: 140,
      discountPrice:30,
      is_in_inventry:true,
      item_left:5,
      pImage: './assets/nike_Shirt_4.png',
    },
    {
      id:10,
      name: 'Nike nike_Shirt_5',
      brand:'NIKE',
      gender:'Women',
      category:"Casual",
      color:["White","Red","Black"],
      price: 150,
      discountPrice:40,
      is_in_inventry:false,
      item_left:0,
      pImage: './assets/nike_Shirt_5.png',
    },
    {
      id:11,
      name: 'Nike Pents_1',
      brand:'NIKE',
      gender:'Men',
      category:"Casual",
      color:["White","Red","Black","Blue","Brown"],
      price: 110,
      discountPrice:10,
      is_in_inventry:true,
      item_left:3,
      pImage: './assets/Nike_Pents_1.png',
    },
    {
      id:12,
      name: 'Nike Pents_2',
      brand:'NIKE',
      gender:'Women',
      color:["White","Red","Black"],
      price: 120,
      discountPrice:20,
      is_in_inventry:true,
      item_left:4,
      pImage: './assets/Nike_Pents_2.png',
    },
    {
      id:13,
      name: 'Nike Pents_3',
      brand:'NIKE',
      gender:'Men',
      category:"Casual",
      color:["White","Red","Black"],
      price: 130,
      discountPrice:30,
      is_in_inventry:true,
      item_left:5,
      pImage: './assets/Nike_Pents_3.png',
    },
    {
      id:14,
      name: 'Nike Pents_4',
      brand:'NIKE',
      gender:'Women',
      category:"Casual",
      color:["White","Red","Black"],
      price: 140,
      discountPrice:30,
      is_in_inventry:true,
      item_left:5,
      pImage: './assets/Nike_Pents_4.png',
    },
    {
      id:15,
      name: 'Nike Pents_5',
      brand:'NIKE',
      gender:'Men',
      category:"Casual",
      color:["White","Red","Black"],
      price: 150,
      discountPrice:40,
      is_in_inventry:true,
      item_left:6,
      pImage: './assets/Nike_Pents_5.png',
    },
    {
      id:16,
      name: 'Nike Cap_1',
      brand:'NIKE',
      gender:'Men',
      category:"Casual",
      color:["White","Red","Black","Blue","Brown"],
      price: 110,
      discountPrice:10,
      is_in_inventry:true,
      item_left:3,
      pImage: './assets/Nike_Cap_1.png',
    },
    {
      id:17,
      name: 'Nike Cap_2',
      brand:'NIKE',
      gender:'Women',
      category:"Casual",
      color:["White","Red","Black"],
      price: 120,
      discountPrice:20,
      is_in_inventry:true,
      item_left:4,
      pImage: './assets/Nike_Cap_2.png',
    },
    {
      id:18,
      name: 'Nike Cap_3',
      brand:'NIKE',
      gender:'Men',
      category:"Casual",
      color:["White","Red","Black"],
      price: 130,
      discountPrice:30,
      is_in_inventry:true,
      item_left:5,
      pImage: './assets/Nike_Cap_3.png',
    },
    {
      id:19,
      name: 'Nike Cap_4',
      brand:'NIKE',
      gender:'Women',
      category:"Casual",
      color:["White","Red","Black"],
      price: 140,
      discountPrice:30,
      is_in_inventry:true,
      item_left:5,
      pImage: './assets/Nike_Cap_4.png',
    },
    {
      id:20,
      name: 'Nike Cap_5',
      brand:'NIKE',
      gender:'Men',
      category:"Casual",
      color:["White","Red","Black"],
      price: 150,
      discountPrice:40,
      is_in_inventry:true,
      item_left:6,
      pImage: './assets/Nike_Cap_5.png',
    },
    
  ] 

  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter(p=>p.is_in_inventry ===true).length;
  totalProductOutOfStock = this.products.filter(p=>p.is_in_inventry ===false).length;
   
  SelectedFilterChanged:string= "all";
  @Input()
  searchText:string= '';
  
  onFilterChanged(value:string)
  {
    this.SelectedFilterChanged = value;
  }
  setSearchText(value:any)
  {
    this.searchText = value;
  }
}
