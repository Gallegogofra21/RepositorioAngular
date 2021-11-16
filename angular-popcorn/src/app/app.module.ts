import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './modules/material-imports.module';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgCircleProgressModule } from 'ng-circle-progress';




@NgModule({
  declarations: [
    AppComponent,
    MoviesPopularListComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,      
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule,
    FlexLayoutModule,
    NgCircleProgressModule.forRoot({
      "backgroundGradient": true,
      "backgroundPadding": -47,
      "radius": 34,
      "unitsColor": "#ffffff",
      "titleColor": "#ffffff",
      "subtitleColor": "#ffffff",
      "imageHeight": 27,
      "imageWidth": 32})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
