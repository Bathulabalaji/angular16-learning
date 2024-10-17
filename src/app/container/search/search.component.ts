import { Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, SimpleChange, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText="";

  @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();

  @ViewChild('searchInput') searchInputEl:ElementRef;

  onSearchTextChange(){
    // this.searchText=intputEl.value;
    // console.log(intputEl.value);
    //this.searchText=intputEl.value;
    this.searchText=this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }


  // @ContentChild('para') mypara:ElementRef;
  // printPara(){
  //   console.log(this.mypara.nativeElement);
  // }
  
  // viewName:string='';
  // @ViewChildren('fullName') inputDetails:QueryList<ElementRef>;

  // displayFullName(){
  //   this.inputDetails.forEach(element => {
  //     this.viewName+=element.nativeElement.value+" ";
  //   });
  //   console.log(this.viewName);
  // }

  // @ContentChild(ProductDetailsComponent) myProd:ProductDetailsComponent;
  
  // showProduct(){
  //   console.log(this.myProd);
  // }

  @ContentChildren('para') paraList:QueryList<ElementRef>;
  showProduct(){
    this.paraList.forEach(element => {
      console.log(element.nativeElement);
    });
  }

  
  @Input()
  name:string='';

  
  @ContentChild('para') myPara:ElementRef;

  @ViewChild('paraData') searchPara:ElementRef;

  ngOnChanges(changes:SimpleChanges){
    // console.log("ngOnChanges called..",this.name);
  }

  ngOnInit(){
    // console.log("ngOnInit callled..",this.name);
  }
  ngDoCheck(){
    // console.log("ngDoCheck called...",this.name);
  }
  ngAfterContentInit(){
    // console.log("ngAftrtContentInit...",this.name);
  }
  ngAfterContentChecked(){
    // console.log("this.myPara.nativeElement");
    // console.log(this.searchPara)
  }
  ngAfterViewInit(){
    // console.log("ngAfterViewInit...",this.searchPara);
  }

  ngAfterViewChecked(){
    // console.log("ngAfterViewChecked....",this.searchPara);
  }
  ngOnDestroy(){
    // console.log("ngOnDestroy...");
  }
}
