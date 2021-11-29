import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { GasolinaListComponent } from '../components/gasolina-list/gasolina-list.component';


const routes: Routes = [
  {path:'',pathMatch:'full', component:GasolinaListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
