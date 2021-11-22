import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesFavListComponent } from './components/movies-fav-list/movies-fav-list.component';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SessionComponent } from './shared/session/session.component';

const routes: Routes = [
  {path: 'popular-movies', component: MoviesPopularListComponent},
  {path: 'loginsuccess', component: SessionComponent},
  {path: '', pathMatch: 'full', component: MoviesPopularListComponent},
  {path: 'favorite-movies', component: MoviesFavListComponent},
  {path: 'listas', component: PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
