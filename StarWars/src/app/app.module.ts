import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetaItemComponent } from './components/planeta-item/planeta-item.component';
import { PlanetaListComponent } from './components/planeta-list/planeta-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonajeItemComponent } from './components/personaje-item/personaje-item.component';
import { PersonajeListComponent } from './components/personaje-list/personaje-list.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PlanetaItemComponent,
    PlanetaListComponent,
    PersonajeItemComponent,
    PersonajeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialImportsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
