import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})

export class ByCapitalPageComponent {
  public ph: string = 'Buscar por ____________________'

  byCapitalBoxSearch(capital: string):void {
    console.log('Desde ByCapitalPage');
    console.log({capital});
  }

}
