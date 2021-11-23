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
import { DialogMovieAddComponent } from './dialogs/dialog-movie-add/dialog-movie-add.component';
import { ListaItemComponent } from './components/lista-item/lista-item.component';
import { DialogLoginComponentComponent } from './dialogs/dialog-login-component/dialog-login-component.component';
import { SessionComponent } from './shared/session/session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesFavListComponent } from './components/movies-fav-list/movies-fav-list.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { PlaylistComponent } from './components/playlist/playlist.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesPopularListComponent,
    MovieItemComponent,
    DialogMovieAddComponent,
    ListaItemComponent,
    DialogLoginComponentComponent,
    SessionComponent,
    MoviesFavListComponent,
    SideMenuComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 25,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeWidth": 0,
      "title": "Rate",
      "titleColor": "#FFFFFF",
      "titleFontSize": "15",
      "titleFontWeight": "bold",
      "showSubtitle": false,
      "animateTitle": true,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": true,
      "backgroundColor": "#000000"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
