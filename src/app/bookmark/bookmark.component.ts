import { Component, OnInit } from '@angular/core';
import { HttpService } from '../app.service';
import { Movie } from '../Movie.interface';
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  BookMarkedMovies: Movie[]=[];

  constructor(http:HttpService) { 
    this.BookMarkedMovies=http.get_BookMarked_Movie()
    
  }

  ngOnInit(): void {
  }

}
