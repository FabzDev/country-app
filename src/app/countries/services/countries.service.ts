import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, of } from 'rxjs';


@Injectable({providedIn: 'root'})
export class CountriesService {
  constructor(private http: HttpClient) { }

  private apiURL: string = 'https://restcountries.com/v3.1'

  searchCapital( term: string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/capital/${term}`)
      .pipe(
        catchError(error => of([]))
      )
  }

  searchCountry( term: string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/name/${term}`)
      .pipe(
        catchError(error => of([]))
      )
  }

  searchRegion( term: string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/region/${term}`)
      .pipe(
        catchError(error => of([]))
      )
  }

  searchCountryId( code: string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/alpha/${code}`)
      .pipe(
        catchError(error => of([]))
      )
  }

}
