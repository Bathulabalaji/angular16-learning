import { Component } from '@angular/core';
import { subscribeService } from '../services/subscribe.service';

@Component({
  selector: 'header-new',
  templateUrl: './header-new.component.html',
  styleUrls: ['./header-new.component.css'],
})
export class HeaderNewComponent {
  constructor(private subService:subscribeService){}
  selectedTab:string='';
  HomeClicked(){
    this.selectedTab='home';
  }
  AdminClicked(){
    this.selectedTab='admin';
  }
  OnSubscribe(){
    // let subService=new subscribeService();
    this.subService.OnSubscribeClick('yearly');
  }
}
