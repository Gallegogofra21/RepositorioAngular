import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { GasolineraListComponent } from '../components/gasolinera-list/gasolinera-list.component';
import { GasolineraFavListComponent } from '../components/gasolinera-fav-list/gasolinera-fav-list.component';
import { ListaListComponent } from '../components/lista-list/lista-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'login', pathMatch: 'full', redirectTo: '/login'},
  { path: 'favorites', pathMatch: 'full', component: GasolineraFavListComponent},
  { path: 'gasolineras', pathMatch: 'full', component: GasolineraListComponent},
  { path: 'listas', pathMatch: 'full', component: ListaListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
