import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ListingModule } from './modules/listing/listing.module';
import { CreateListingModule } from './modules/create-listing/create-listing.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ViewListingsModule } from './modules/view-listings/view-listings.module';
import { MessageModule } from './modules/message/message.module';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ListingModule,
    CreateListingModule,
    ProfileModule,
    ViewListingsModule,
    MessageModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    CheckboxModule,
    InputTextareaModule,
    ButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
