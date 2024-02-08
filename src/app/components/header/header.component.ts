import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit ,OnDestroy {
  backgroundstate:boolean=false
  state!:boolean
  subscription!: Subscription;
  constructor(public dataservice:DataServiceService,public route:Router) {

   }
 

  ngOnInit(): void {

    this.subscription=this.dataservice.currDrawerState.subscribe(state=>this.state=state)
  }
  toggleDrawerState(){
    this.dataservice.changeDrawerState(!this.state)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  toggleBackGround(bstate:boolean){
    this.dataservice.changebState(!this.backgroundstate)
  }
  hadleNavigation(routes:string){
    localStorage.removeItem('token')
    this.route.navigate([""+routes])
    
   
 }

}
