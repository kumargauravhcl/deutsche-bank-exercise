import { LoaderService } from '../loader/services/loader.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService extends HttpClient {
  constructor(defaultOptions: HttpHandler, private loaderService: LoaderService) {
    super(defaultOptions);
  }

  get(url: string, options?: any, showloader = true): Observable<any> {
    if (showloader) {
      this.showLoader();
    }

    return super.get(url, this.requestOptions(options)).pipe(
      finalize(() => {
        this.onEnd();
      })
    );
  }

  /*
    post(url: string, body: any, options?: any): Observable<any> {
      // Not required as of now
    }

    put(url: string, body: any, options?: any): Observable<any> {
      // Not required as of now
    }

    fetch(url: string, options?: any): Observable<any> {
      // Not required as of now
    }
    */

  private requestOptions(options?: any): any {
    if (options == null) {
      options = {};
    } else if (options.headers == null) {
      options.headers = new HttpHeaders();
    }
    return options;
  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }
}
