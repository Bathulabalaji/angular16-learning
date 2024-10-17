import { Component } from '@angular/core';
import { subscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  //providers:[subscribeService]
})
export class HomeComponent {
  constructor(private subService:subscribeService){

  }
  OnSubscribe(){
    // let subService=new subscribeService();
    this.subService.OnSubscribeClick('quarterly');
  }
}
