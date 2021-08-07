import { Component } from '@angular/core';
import { HttpService } from './app.service';
import { Movie } from './Movie.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
FavMovie(data:any){
  

  


  this.http.Update_BookMarked_Movie(data);
  this.data.Bookmark=!this.data.Bookmark
}


}
