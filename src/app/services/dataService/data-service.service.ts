import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private bgState=new BehaviorSubject(false);
  currbState = this.bgState.asObservable();

  private drawerState = new BehaviorSubject(false);
  currDrawerState = this.drawerState.asObservable();

  constructor() { }

  changeDrawerState(state: boolean) {
    this.drawerState.next(state)
  }
  changebState(state: boolean) {
    this.bgState.next(state)
  }
}
