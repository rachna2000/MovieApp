import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SearchPageComponent } from './search-page/search-page.component';

 const routes: Routes = [
  {path:'BookMarked' ,component: BookmarkComponent},
  {path:'' ,component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
