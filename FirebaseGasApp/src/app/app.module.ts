import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './modules/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule, USE_DEVICE_LANGUAGE, USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';
import { LoginComponent } from './components/login/login.component';
import { MaterialImportModules } from './modules/material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GasolineraItemComponent } from './components/gasolinera-item/gasolinera-item.component';
import { GasolineraListComponent } from './components/gasolinera-list/gasolinera-list.component';
import { DialogGasolineraDetailComponent } from './components/dialog-gasolinera-detail/dialog-gasolinera-detail.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { GasolineraFavListComponent } from './components/gasolinera-fav-list/gasolinera-fav-list.component';
import { ListaItemComponent } from './components/lista-item/lista-item.component';
import { ListaListComponent } from './components/lista-list/lista-list.component';
import { DialogGasolineraAddComponent } from './components/dialog-gasolinera-add/dialog-gasolinera-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GasolineraItemComponent,
    GasolineraListComponent,
    DialogGasolineraDetailComponent,
    ToolbarComponent,
    GasolineraFavListComponent,
    ListaItemComponent,
    ListaListComponent,
    DialogGasolineraAddComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportModules,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
