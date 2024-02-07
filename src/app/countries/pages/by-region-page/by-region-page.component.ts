import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';
import { count } from 'rxjs';



@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  constructor(private countriesService: CountriesService) {}

  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  public countries: Country[] = [];

  public isLoading: boolean = false;

  public actualRegion?: Region;

  public ph: string = 'Buscar por región';

  regionSearch(region: Region): void {
    this.isLoading = true;
    this.actualRegion = region;
    this.countriesService.searchBy(region, 'region').subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
