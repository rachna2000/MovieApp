import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './Movie.interface';


@Injectable()
export class HttpService {
  BookMark: Movie[] = [];
  constructor(private http: HttpClient) { }
  
//argument: MOvieName is the string that is searched in search bar.
//this function does the httprequest using the string .
getConfig(MovieName:any) {
    console.log(MovieName);
   const Url = "https://www.omdbapi.com/?apikey=b9d44098&t="+MovieName;
   console.log(Url)
  return this.http.get<any>(Url);
}
//paramter:data is the input data which is bookmarked.
//This function add this data into BookMark Array.
Update_BookMarked_Movie(data:any){
  console.log("here");
  if(!data.Bookmark){   
    if(!data.Ratings[0]){
      data.Ratings="N/A"
    }
   this.BookMark.push({Title:data.Title,Ratings:data.Ratings[0].Value,Poster:data.Poster,Bookmark:true,Released:data.Released});
  }
  else{
    for(var i = 0; i < this.BookMark.length; i++) {
      if(this.BookMark[i].Title == data.Title) {
          this.BookMark.splice(i, 1);
          break;
      }
  }
  }
 
  console.log(this.BookMark)
}
//To get the BookMark Array
get_BookMarked_Movie(){
  return this.BookMark;
}
}
