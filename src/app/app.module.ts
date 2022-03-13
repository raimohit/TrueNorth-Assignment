import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchhistoryComponent } from './searchhistory/searchhistory.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { FormsModule } from '@angular/forms';
import { NAPipe } from './services/na.pipe';
import { UserprofileComponent } from './userprofile/userprofile.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchhistoryComponent,
    SearchpageComponent,
    NAPipe,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
