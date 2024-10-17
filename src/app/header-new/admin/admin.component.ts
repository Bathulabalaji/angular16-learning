import { Component } from '@angular/core';
import { subscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  //providers:[subscribeService]
})
export class AdminComponent {
  constructor(private subService:subscribeService){}
  OnSubscribe(plan:string){
    //let subService=new subscribeService();
    this.subService.OnSubscribeClick(plan);
  }
}

