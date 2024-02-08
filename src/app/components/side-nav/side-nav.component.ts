import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';
import { ARCHIVE_ICON, EDIT_ICON, NOTE_ICON, REMINDER_ICON, TRASH_ICON } from 'src/assets/svgicons/svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  host:{
    class :"app-sidenav-cnt"
  }
})
export class SideNavComponent implements OnInit, OnDestroy {
 

  state!:boolean
  subscription!: Subscription;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public route:Router, public dataService:DataServiceService) {
    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral("archive-icon", sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral("trash-icon", sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
   }
 

  ngOnInit(): void {
    this.subscription = this.dataService.currDrawerState.subscribe(currState=>this.state=currState)
  }
  hadleNavigation(route:string){
     this.route.navigate(["dashboard/"+route])
  }


  ngOnDestroy(): void {
   this.subscription.unsubscribe()
  }

 

}

