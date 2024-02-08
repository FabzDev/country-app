import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';
import { count } from 'rxjs';



@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit{
  public ph: string = 'Buscar por región';
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public actualRegion?: Region;
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void{
    this.actualRegion = this.countriesService.cacheCountries.byRegion.searchRegion
    this.countries = this.countriesService.cacheCountries.byRegion.countries
  }

  regionSearch(region: Region): void {
    this.isLoading = true;
    this.actualRegion = region;
    this.countriesService.searchBy(region, 'region')
      .subscribe((countries) => {
        this.actualRegion = this.countriesService.cacheCountries.byRegion.searchRegion
        this.countries = countries;
        this.isLoading = false;
    });
  }
}
