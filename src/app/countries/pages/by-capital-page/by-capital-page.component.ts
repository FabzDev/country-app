import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})

export class ByCapitalPageComponent {

  constructor(private countriesService: CountriesService ){}

  public countries: Country[] = []

  public ph: string = 'Buscar por capital'

  capitalSearch(capital: string):void {
    this.countriesService.searchBy( capital, "capital" ).subscribe( countries => {this.countries = countries;})
  }

}
