import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscriber, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  @Input()
  public placeH: string = '';

  @Output()
  public boxEvent: EventEmitter<string> = new EventEmitter();

  boxSearch(value: string): void {
    this.boxEvent.emit(value);
  }

  // DEBOUNCER
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer.pipe(debounceTime(500))
    .subscribe((value) => {
      this.boxSearch(value)
    });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe()
  }

  onDelayedKey(txtBox: string) {
    this.debouncer.next(txtBox);
  }
}
