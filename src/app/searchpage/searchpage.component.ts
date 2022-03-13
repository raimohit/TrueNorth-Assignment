import { ApicallService } from '../services/apicall.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  userlist:string[]=[]
  searchedUser=''
  currentUserInfo:any
  showUserProfile=false;
  loadUserProfile=false;
  constructor(private api:ApicallService) { }

  ngOnInit(): void {

    this.userlist=["mojombo","pjhyett","wycats","vanpelt","kevinclark"]
    
    /*get top 30 most active users on github*/

    // this.api.getUsers().subscribe((res:any)=>{
    //   //console.log('userinfo',res)
    //   res.forEach((user:any)=>{
    //    // console.log(user)
    //     this.userlist.push(user.login)
    //   })
    //   console.log(this.userlist)
    // })
    
  }

  getUser(){
        this.api.messageSource.next(this.searchedUser)
        this.showUserProfile=true
  }

}
