import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbThemeModule, NbUserModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './app.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SearchPageComponent } from './search-page/search-page.component';
@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbInputModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    HttpClientModule,
    NbFormFieldModule,
    FormsModule,
    NbListModule,
    NbUserModule ,
    NbIconModule,
    CommonModule,
    

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
