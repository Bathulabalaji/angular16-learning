import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedProduct:Product;
  products=[
    {
      name:"iphone 16",
      price:799,
      color:"blue",
      discount:8.5,
      inStock:10,
      addToCart:0,
      pImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/l/g/-original-imagtc5frtz9j7tb.jpeg?q=70",
      wishlist:false,
      cart:false,
      payment:false
    },
    {
      name:"iphone 15",
      price:999,
      color:"purple",
      discount:8.5,
      inStock:0,
      addToCart:0,
      pImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
      wishlist:false,
      cart:false,
      payment:false
    },
    {
      name:"iphone 16 pro",
      price:999,
      color:"pink",
      discount:8.5,
      inStock:10,
      addToCart:0,
      pImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70",
      wishlist:false,
      cart:false,
      payment:false
    },
    {
      name:"iphone 15 pro",
      price:999,
      color:"red",
      discount:8.5,
      inStock:0,
      addToCart:0,
      pImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
      wishlist:false,
      cart:false,
      payment:false
    },
    {
      name:"iphone 14",
      price:999,
      color:"pale white",
      discount:8.5,
      inStock:10,
      addToCart:0,
      pImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70",
      wishlist:false,
      cart:false,
      payment:false 
    },
    {
      name:"iphone 14 pro",
      price:1099,
      color:"light blue",
      discount:8.7,
      inStock:10,
      addToCart:0,
      pImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/l/g/-original-imagtc5frtz9j7tb.jpeg?q=70",
      wishlist:false,
      cart:false,
      payment:false 
    },
    {
      name:"iphone 13",
      price:1099,
      color:"pink",
      discount:8.7,
      inStock:10,
      addToCart:0,
      pImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70",
      wishlist:false,
      cart:false,
      payment:false 
    },
    {
      name:"iphone 13 pro",
      price:999,
      color:"blue",
      discount:8.5,
      inStock:10,
      addToCart:0,
      pImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70",
      wishlist:false,
      cart:false,
      payment:false 
    },
    {
      name:"iphone 12",
      price:999,
      color:"purple",
      discount:8.5,
      inStock:10,
      addToCart:0,
      pImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/l/g/-original-imagtc5frtz9j7tb.jpeg?q=70",
      wishlist:false,
      cart:false,
      payment:false   
    },
    {
      name:"iphone 12 pro",
      price:999,
      color:"pink",
      discount:8.5,
      inStock:0,
      addToCart:0,
      pImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
      wishlist:false,
      cart:false,
      payment:false 
    },
    {
      name:"iphone 11",
      price:999,
      color:"blue",
      discount:8.5,
      inStock:10,
      addToCart:0,
      pImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70",
      wishlist:false,
      cart:false,
      payment:false 
    },
    {
      name:"iphone 11 pro",
      price:999,
      color:"red",
      discount:8.5,
      inStock:0,
      addToCart:0,
      pImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
      wishlist:false,
      cart:false,
      payment:false
    }
  ];

  totalProducts=this.products.length;
  totalProductsInStock=this.products.filter(p=>p.inStock>0).length;
  totalProductsOutOfStock=this.products.filter(p=>p.inStock===0).length;

  onFilterChange(value:string){
    this.selectedFilterRadioButton=value;
  }

  selectedFilterRadioButton:string='all';
  
  @Input()
  searchText:string='';
  setSelectedProduct(prod){
    this.selectedProduct=prod;
    //console.log("prod list",this.selectedProduct)
  }
  removeSelectedProduct(){
    this.selectedProduct=null
  }

}
