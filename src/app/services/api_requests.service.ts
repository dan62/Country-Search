// Importing of necessary modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Declaring service as an injectable
@Injectable()

// Exporting of module 
export class ApiRequestsService {

    // Declaration of variable containing API URL
    retreive_countries_url: any = 'https://restcountries.eu/rest/v2/all';

    // Constructor
    constructor(
        private http: HttpClient
    ) {}

    // Function that makes API request to retreive countries
    getCountries() {
        return this.http.get(this.retreive_countries_url);
    }
}

