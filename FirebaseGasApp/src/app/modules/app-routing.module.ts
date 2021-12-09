import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { GasolineraListComponent } from '../components/gasolinera-list/gasolinera-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: GasolineraListComponent },
  { path: 'login', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
