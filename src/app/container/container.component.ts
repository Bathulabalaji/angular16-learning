import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from '../models/product';



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})



export class ContainerComponent {

  searchText:string='';
  
  isDestroy:boolean=false;
  // @ViewChild(ProductListComponent) productListComponent:ProductListComponent;

  onSearchChange(value:string){
    this.searchText=value;
  }

  newName:string;
  nameTextChange(inputVal:HTMLInputElement){
    this.newName=inputVal.value;
  }

  destroyChanger(){
    this.isDestroy=!this.isDestroy;
  }
  //  @ViewChild('para') myPara:ElementRef;
  // showPara(){
  //   console.log(this.myPara.nativeElement);
  // }
  
}
