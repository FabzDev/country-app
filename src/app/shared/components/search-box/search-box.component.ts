import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscriber, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  @Input()
  public initialValue: string = ''

  @Input()
  public placeH: string = '';

  @Input()
  public textBoxSavedC: string = '';

  @Output()
  public boxEvent: EventEmitter<string> = new EventEmitter();


  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription

  boxSearch(value: string): void {
    this.boxEvent.emit(value);
  }

  onDelayedKey(txtBox: string) {
    this.debouncer.next(txtBox);
  }


  //ON INIT ON DESTROY
  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(500)
        )
    .subscribe((value) => {
      this.boxSearch(value)
    });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe()
  }


}
