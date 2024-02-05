import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class CountriesService {
  constructor(private http: HttpClient) { }

  private apiURL: string = 'https://restcountries.com/v3.1'

  searchCapital( term: string ): Observable<string>{
    return this.http.get<string>(`${this.apiURL}/capital/${term}`)
  }
}
