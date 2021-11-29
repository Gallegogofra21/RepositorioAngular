import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeListComponent } from './components/personaje-list/personaje-list.component';
import { PlanetaListComponent } from './components/planeta-list/planeta-list.component';

const routes: Routes = [
  {path: 'planets', pathMatch:'full', component:PlanetaListComponent},
  {path:'',pathMatch:'full', redirectTo:'/peopleList'},
  {path:'peopleList', pathMatch:'full', component:PersonajeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
