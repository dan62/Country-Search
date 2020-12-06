// Importing of necessary modules
import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from '../../services/api_requests.service'

// Declaration of component
@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css', './cards_style.scss']
})

// Exporting of component (Encapsulation)
export class ListCountriesComponent implements OnInit {
  
  searchText = '';
  countries: any = [];

  // Search feature variables
  active: number;
  characters = [];
  user_data: any;

  // Component constructor
  constructor(public API: ApiRequestsService) {

  }

  // LifeCycle function
  ngOnInit(): void {
     this.API.getCountries().subscribe((data) => {
       this.countries = data;
     }); 
  }

  onKey(event: any) { 
    this.searchText += event.target.value + ' | ';
  }

}
