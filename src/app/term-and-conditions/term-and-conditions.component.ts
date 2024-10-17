import { Component } from '@angular/core';

@Component({
  selector: 'term-and-conditions',
  templateUrl: './term-and-conditions.component.html',
  styleUrls: ['./term-and-conditions.component.css']
})
export class TermAndConditionsComponent {
  // display:boolean=true;

  // servicesAndPoliciesContol(){
  //   this.display=!this.display;
  // }
  opt:string='';
  tcInfo(){
    this.opt='info';
  }
  tcServices(){
    this.opt='services';
  }
  tcPrivacy(){
    this.opt='privacy';
  }
  tcUser(){
    this.opt='user';
  }
}
