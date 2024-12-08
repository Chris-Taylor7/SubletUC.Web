import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { ViewListingsComponent } from './modules/view-listings/view-listings/view-listings.component';
import { CreateListingComponent } from './modules/create-listing/create-listing/create-listing.component';
import { MessageComponent } from './modules/message/message/message.component';
import { ProfileComponent } from './modules/profile/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-listing', component: CreateListingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'view-listings', component: ViewListingsComponent },
  { path: 'message', component: MessageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home by default
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
