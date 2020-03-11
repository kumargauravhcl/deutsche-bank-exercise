import { Injectable, Output, EventEmitter } from '@angular/core';
import { ILoaderState } from '../models/ILoaderState';

@Injectable()
export class LoaderService {
  counter = 0;

  @Output()
  public loaderState: EventEmitter<ILoaderState> = new EventEmitter<ILoaderState>();

  constructor() {}

  show(): void {
    this.loaderState.emit({ show: true });
    this.counter++;
  }
  hide(): void {
    this.counter--;
    if (this.counter <= 0) {
      this.counter = 0;
      this.loaderState.emit({ show: false });
    }
  }
}
