// Importing of necessary modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCountriesComponent } from './views/list-countries/list-countries.component';

// Declaration of application routes with associated components
const routes: Routes = [
  { path: '', component: ListCountriesComponent },
];

// Attaching routes to root module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Exporting of module
export class AppRoutingModule { }
