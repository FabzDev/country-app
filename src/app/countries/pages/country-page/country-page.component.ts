import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.activedRoute.params
      .pipe(switchMap(({ id }) => this.countriesService.searchCountryId(id)))
      .subscribe((country) => {
        country ? console.log(country) : this.router.navigateByUrl('')
      });
  }
  // ngOnInit(): void {
  //   this.activedRoute.params
  //   .subscribe((params) => {
  //     this.countriesService.searchCountryId(params['id'])
  //       .subscribe((countries) => {
  //         console.log(this.country = countries[0])
  //       })
  //   });
  // }
}
