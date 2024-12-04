import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../data/listing';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private baseurl = environment.apiUrl + 'listing/';

  constructor(private http: HttpClient) {}

  createListing(listing: Listing): Observable<Listing> {
    return this.http.post<Listing>(this.baseurl + 'CreateListing', listing);
  }

  getAllListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.baseurl + 'GetAllListings');
  }

  getListingById(id: number): Observable<Listing> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<Listing>(`${this.baseurl}GetListing`, { params });
  }

  updateListing(listing: Listing): Observable<Listing> {
    return this.http.post<Listing>(`${this.baseurl}UpdateListing`, listing);
  }

  deleteListing(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete(`${this.baseurl}DeleteListing`, { params });
  }

  getUserListings(userId: number): Observable<Listing[]> {
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.get<Listing[]>(`${this.baseurl}GetUserListings`, { params });
  }
}
