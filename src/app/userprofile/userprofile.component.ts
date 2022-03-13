import { ApicallService } from '../services/apicall.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  showUserProfile=false;
  currentUserInfo: any;

  constructor(private api:ApicallService) { }
  searchedUser=''

  ngOnInit(): void {
    this.api.currentUsername.subscribe((user) => {
      this.searchedUser=user
      this.getUser()
    })
    
  }

  /*Purpose: Get user profile details from Github API*/
  getUser(){
   
    let searchhistory:any=localStorage.getItem('searchhistory')

    if(searchhistory ==undefined || searchhistory == null || searchhistory==''){ 
      this.api.searchHistory=[]
    }else{
      this.api.searchHistory=JSON.parse(searchhistory)
    }
   
    if(this.api.searchHistory.indexOf(this.searchedUser)==-1){
      this.api.searchHistory.push(this.searchedUser)
      localStorage.setItem('searchhistory',JSON.stringify(this.api.searchHistory))
    }
    
    this.api.getUserProfile(this.searchedUser).subscribe((res)=>{
      this.currentUserInfo=res
      this.showUserProfile=true
      this.api.messageSource.next('')

    }
    )
  }

}
