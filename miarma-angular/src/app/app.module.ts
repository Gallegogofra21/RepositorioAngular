import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { PostItemComponent } from './components/post-item/post-item.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    SideMenuComponent,
    PostItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialImportsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
