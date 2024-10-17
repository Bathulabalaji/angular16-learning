import { Component } from '@angular/core';
import { subscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
  //providers:[subscribeService]
})
export class SidebarComponent {
  constructor(private subService:subscribeService){

  }
  OnSubscribe(plan:string){
    // let subscribe=new subscribeService();
    this.subService.OnSubscribeClick(plan);
  }
}
