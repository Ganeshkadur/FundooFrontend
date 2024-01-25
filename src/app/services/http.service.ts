import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
public baseUrl="https://localhost:5001/api/"

  constructor(public http:HttpClient) { 
    
  }
LoginCall(endPoint:string,data:object):Observable<any>{
   return this.http.post(`${this.baseUrl+endPoint}`,data)
}
SignUp(endPoint:string,data:object):Observable<any>{
  return this.http.post(`${this.baseUrl+endPoint}`,data)
}

}
