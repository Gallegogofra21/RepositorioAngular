import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPopularListComponent } from '../movies-popular-list/movies-popular-list.component';

const routes: Routes = [
  { path: 'movies-popular', component: MoviesPopularListComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
