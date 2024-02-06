import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  private id: string = '';
  private country!: Country

  ngOnInit(): void {
    this.activedRoute.params
    .subscribe((params) => {
      this.countriesService.searchCountryId(params['id'])
        .subscribe((countries) => {
          console.log(this.country = countries[0])
        })
    });
  }
}
