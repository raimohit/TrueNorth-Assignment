import { ApicallService } from '../services/apicall.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchhistory',
  templateUrl: './searchhistory.component.html',
  styleUrls: ['./searchhistory.component.css']
})
export class SearchhistoryComponent implements OnInit {

  constructor(private api: ApicallService) { }
  searchHistory:any
  showUserProfile=false
  

  ngOnInit(): void {

    if(this.api.searchHistory.length ==0){
      let searchHistory:any=localStorage.getItem('searchhistory')
      this.searchHistory=JSON.parse(searchHistory)
    }else{
      //console.log(this.api.searchHistory)
      this.searchHistory=this.api.searchHistory
    }
    
  }

  loadUser(username:string){
    this.api.messageSource.next(username)
    this.showUserProfile=true
  }

  clearHistory(){
    localStorage.removeItem('searchhistory')
    this.api.searchHistory=[]
    this.searchHistory=[]
  }

}
