import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpService:HttpService) { }

  userLogin(data:object){

    return this.httpService.LoginCall("Fandoo_/UserLogin",data)
  }

  userSignup(data:object){
    return this.httpService.SignUp("Fandoo_/UserRegisration",data)
  }
}
