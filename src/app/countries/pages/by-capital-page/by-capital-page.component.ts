import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public textBoxSavedP: string = '';
  public ph: string = 'Buscar por capital';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheCountries.byCapital.countries;
    this.textBoxSavedP =
      this.countriesService.cacheCountries.byCapital.searchTerm;
  }

  capitalSearch(capital: string): void {
    this.isLoading = true;
    this.countriesService
      .searchBy(capital, 'capital')
      .subscribe((countries) => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
