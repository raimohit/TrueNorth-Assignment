import { SearchhistoryComponent } from './searchhistory/searchhistory.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search', component: SearchpageComponent },
  { path: 'searchhistory', component: SearchhistoryComponent },
  { path: '',   redirectTo: 'dashboard', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: DashboardComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
