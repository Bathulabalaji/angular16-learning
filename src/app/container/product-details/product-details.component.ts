import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {


  // @Input()
  // productListComp:ProductListComponent=undefined;
  @Input()
  product: Product;


  
  // ngOnInit(){
  //   this.product=this.productListComp.selectedProduct;
  //   console.log("prod details", this.productListComp.selectedProduct)
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
  paymentChange(){
    this.product.payment=!this.product.payment;
  }

}
