import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-storage.interface';
import { Region } from '../interfaces/region.type';

import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService implements OnInit {
  private apiURL: string = 'https://restcountries.com/v3.1';

  public cacheCountries: CacheStore = {
    byCapital: { searchTerm: '', countries: [] },
    byCountry: { searchTerm: '', countries: [] },
    byRegion: { searchRegion: '', countries: [] },
  };

  constructor(private http: HttpClient ) { this.loadCacheLocalStorage()}

  ngOnInit(): void {
  }

  saveCacheLocalStorage(){
    localStorage.setItem(
      'cacheCountries',
      JSON.stringify(this.cacheCountries)
    )
  }

  loadCacheLocalStorage(){
    const storedDataJSON = localStorage.getItem('cacheCountries');
    if (!storedDataJSON) return
    this.cacheCountries = JSON.parse(storedDataJSON);
  }

  searchBy(term: string, path: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/${path}/${term}`).pipe(
      tap((countries) => {
        switch (path) {
          case 'capital':
            this.cacheCountries.byCapital = { searchTerm: term, countries };
            break;
          case 'name':
            this.cacheCountries.byCountry = { searchTerm: term, countries };
            break;
          case 'region':
            this.cacheCountries.byRegion = {
              searchRegion: term as Region,
              countries,
            };
            break;
        }
      }),
      tap(
        () => this.saveCacheLocalStorage()
      ),
      catchError((error) => of([]))
    );
  }

  searchCountryId(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiURL}/alpha/${code}`).pipe(
      map((countries) => (countries ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }
}

// DEPRECATED
// searchCapital( term: string ): Observable<Country[]>{
//   return this.http.get<Country[]>(`${this.apiURL}/capital/${term}`)
//     .pipe(
//       catchError(error => of([]))
//     )
// }

// searchCountry( term: string ): Observable<Country[]>{
//   return this.http.get<Country[]>(`${this.apiURL}/name/${term}`)
//     .pipe(
//       catchError(error => of([]))
//     )
// }

// searchRegion( term: string ): Observable<Country[]>{
//   return this.http.get<Country[]>(`${this.apiURL}/region/${term}`)
//     .pipe(
//       catchError(error => of([]))
//     )
// }
