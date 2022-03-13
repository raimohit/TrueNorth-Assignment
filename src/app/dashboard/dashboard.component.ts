import { ApicallService } from '../services/apicall.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUsername:any;
  followerInfo:any
  reputationInfo:any
  userlist:string[]=[]

  constructor(private api:ApicallService,private router:Router) { }

  ngOnInit(): void {
    this.api.getUserData().subscribe((res:any)=>{
      console.log(res)
      this.currentUsername=res.name;
      this.followerInfo=res.follower;
      this.reputationInfo=res.reputation
      this.searchUser()
    })
  }

  /*get default user information from json file*/
  searchUser(){
    this.userlist=[]
    this.api.getUsers().subscribe((res:any)=>{
      //console.log('userinfo',res)
      res.forEach((user:any)=>{
        this.userlist.push(user.login)
      })
    })
    
  }

  redirectTo(routeValue:any){
    this.router.navigate(['/'+routeValue])
  }

}
