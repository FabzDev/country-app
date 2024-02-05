import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  constructor(private countriesService: CountriesService ){}

  public countries: Country[] = []

  public ph: string = 'Buscar por país'

  countrySearch(country: string):void {
    this.countriesService.searchCountry( country ).subscribe( countries => {this.countries = countries;})
  }
}
