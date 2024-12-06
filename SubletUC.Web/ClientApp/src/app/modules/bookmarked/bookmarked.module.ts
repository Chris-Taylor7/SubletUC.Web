import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkedComponent } from './bookmarked/bookmarked.component';



@NgModule({
  declarations: [BookmarkedComponent],
  imports: [
    CommonModule
  ],
  exports: [BookmarkedComponent]
})
export class BookmarkedModule { }
