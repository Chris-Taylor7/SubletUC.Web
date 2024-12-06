import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/data/listing';
import { ListingService } from 'src/app/services/listing-service';
import { UserService } from 'src/app/services/user-service';
import { Dayjs } from 'dayjs';
import { User } from 'src/app/data/user';

@Component({
  selector: 'app-profile',
  //standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  currentUser!: User;
  listings: Listing[] = [];

  constructor(
    private userService: UserService,
    private listingService: ListingService
  ) {}

  ngOnInit(): void {
    this.loadUserData();
    this.loadUserListings();
  }

  loadUserData() {
    this.userService.getCurrentUser(this.currentUser.userId).subscribe((data) => {
      this.currentUser = data;
    });
  }

  loadUserListings() {
    this.listingService.getUserListings(this.currentUser.userId).subscribe((data) => {
      this.listings = data;
    });
  }

}
