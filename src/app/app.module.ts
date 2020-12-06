// Importing of necessary modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCountriesComponent } from './views/list-countries/list-countries.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Custom services
import { ApiRequestsService } from './services/api_requests.service'

// Custom pipes
import { FilterPipe } from './pipes/filter.pipe'

// Custom directives
import { HighlightDirective } from './directives/highlight.directive'

// Declarations and imports into app
@NgModule({
  declarations: [
    AppComponent,
    ListCountriesComponent,
    FilterPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiRequestsService],
  bootstrap: [AppComponent]
})

// Exporting of module for encapsulation
export class AppModule { }
