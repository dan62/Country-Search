/*
Filter Pipe that performs a filter on the 
array of countries

- Daniel Goncalves
*/

// Importing of necessary modules
import { Pipe, PipeTransform } from '@angular/core';

// Declaration of pipe
@Pipe({ name: 'appFilter' })

// Exporting of module as an encapsulated module
export class FilterPipe implements PipeTransform {

  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */

  // Function that takes in an array of countries and search text then performs the filter
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
