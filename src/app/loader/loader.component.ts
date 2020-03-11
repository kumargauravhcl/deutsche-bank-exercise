import { ILoaderState } from './models/ILoaderState';
import { LoaderService } from './services/loader.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  show = false;
  private subs: Subscription;

  constructor(private loaderService: LoaderService) {
    this.subs = this.loaderService.loaderState.subscribe(
      (state: ILoaderState) => {
        this.show = state ? state.show : false;
      },
      error => {}
    );
    this.loaderService.hide();
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
