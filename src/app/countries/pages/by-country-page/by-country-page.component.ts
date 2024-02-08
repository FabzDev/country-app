import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{
  public countries: Country[] = [];
  public ph: string = 'Buscar por país';
  public textBoxSavedP = '';

  constructor(private countriesService: CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheCountries.byCountry.countries;
    this.textBoxSavedP = this.countriesService.cacheCountries.byCountry.searchTerm;
  }

  countrySearch(country: string):void {
    this.countriesService
    .searchBy( country, "name" )
      .subscribe( countries => {
        this.countries = countries;
      })
  }
}
