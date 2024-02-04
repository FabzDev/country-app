import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeH: string = ''

  @Output()
  public boxEvent: EventEmitter<string> = new EventEmitter()

  boxSearch(value: string):void {
    this.boxEvent.emit(value)
  }


}
