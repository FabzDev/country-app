import { Country } from './country.interface';
import { Region } from './region.type';

export interface CacheStore {
  byCapital: TermCountries;
  byCountry: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries {
  searchTerm: string;
  countries: Country[];
}

export interface RegionCountries {
  searchRegion: Region;
  countries: Country[];
}
