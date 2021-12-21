import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent},
  { path: 'form', pathMatch: 'full', component: FormComponent},
  { path: 'login', pathMatch: 'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
