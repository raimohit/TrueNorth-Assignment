import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  searchHistory:string[]=[]
   messageSource = new BehaviorSubject("default message");
  currentUsername = this.messageSource.asObservable();
 // currentUsername=''

  constructor(private http:HttpClient) {}

  getUserData(){
    return this.http.get('../assets/userinfo.json');
  }

  getUsers(){
    return this.http.get("https://api.github.com/users ")
  }

  getUserProfile(data:any){
    return this.http.get("http://api.github.com/users/"+data)
  }


}
