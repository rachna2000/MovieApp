import { Component, OnInit } from '@angular/core';
import { HttpService } from '../app.service';
import { Movie } from '../Movie.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent  {

  title = 'MovieApp';
  data:any;
  name: string = '';
  favMovieArray: Movie[]=[];
  Bookmark="Bookmark"
  Bookmarked="Bookmarked"
  
  constructor(private http: HttpService) { }
    showMovies() {
      
    this.http.getConfig(this.name)
    .subscribe((data:any) => {
      console.log(data);
      this.data=data;
      this.data.Bookmark=false
      this.favMovieArray=this.http.get_BookMarked_Movie();
      for(var i = 0; i < this.favMovieArray.length; i++) {
        if(this.favMovieArray[i].Title == data.Title) {
            this.data.Bookmark=true
        }
    }
    });
  
}
//will add the data in the Bookmark array by requesting in service.ts file
  FavMovie(data:any){

    this.http.Update_BookMarked_Movie(data);
    this.data.Bookmark=!this.data.Bookmark
  }

}
