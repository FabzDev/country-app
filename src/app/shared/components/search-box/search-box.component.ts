import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit{

  @Input()
  public placeH: string = ''

  @Output()
  public boxEvent: EventEmitter<string> = new EventEmitter()

  boxSearch(value: string):void {
    this.boxEvent.emit(value)
  }

  // DEBOUNCER
  private debouncer: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      console.log(value);
    })
  }

  onDelayedKey(txtBox: string){
    this.debouncer.next(txtBox)
  }
}
