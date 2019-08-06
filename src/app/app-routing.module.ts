import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoompaDetailComponent } from './components/loompa-detail/loompa-detail.component';
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'detail/:id', component: LoompaDetailComponent}];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


