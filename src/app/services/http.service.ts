import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private authHeader = new HttpHeaders({
    'Accept': "application/json",
    Authorization: `Bearer ${localStorage.getItem('token')}` || ""
  })

public baseUrl="https://localhost:5001/api/"

  constructor(public http:HttpClient) { 
    
  }
LoginCall(endPoint:string,data:object):Observable<any>{
   const res:any= this.http.post(`${this.baseUrl+endPoint}`,data)
   console.log(res.data);
   
    // localStorage.setItem("token",res.data)
    

   return res
}
SignUp(endPoint:string,data:object):Observable<any>{
  return this.http.post(`${this.baseUrl+endPoint}`,data)
}
fetchNotesCall(endPoint:string){

  return this.http.get(`${this.baseUrl+endPoint}`,{headers:this.authHeader})
}

addNotesCall(endPoint:string,data:Object){
  return this.http.post(`${this.baseUrl+endPoint}`,data,{headers:this.authHeader})
}

toggleArchiveAndTrash(endPoint:string){
 return this.http.put(`${this.baseUrl+endPoint}`,{},{headers:this.authHeader})
}

addColor(endPoint:string){
  return this.http.post(`${this.baseUrl+endPoint}`,{},{headers:this.authHeader})
 }

 editNote(endPoint:string,data:{}){
  return this.http.put(`${this.baseUrl+endPoint}`,data,{headers:this.authHeader})
 }
 deleteNote(endPoint:string){
  return this.http.delete(`${this.baseUrl+endPoint}`,{headers:this.authHeader})
 }


}
