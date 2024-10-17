import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input()
  product:Product;

  // ngOnInit(){
  //   //console.log("Prod: " , this.product)
  // }

  decrementCartValue(){
    if(this.product.addToCart>0){
      this.product.addToCart--;
    }
  }

  incrementCartValue(){
    if(this.product.inStock>this.product.addToCart){
      this.product.addToCart++;
    }
  }
  onImageChange(Url:string){
    this.product.pImage=Url;
  }
  whishlistChange(){
    this.product.wishlist=!this.product.wishlist;
  }
  cartChange(){
    this.product.cart=!this.product.cart;
  }
}
