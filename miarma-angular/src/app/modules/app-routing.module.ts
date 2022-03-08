import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { PostsListComponent } from '../components/posts-list/posts-list.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'public-posts', component: PostsListComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
