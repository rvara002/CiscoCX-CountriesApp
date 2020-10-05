import { Overlay } from '@angular/cdk/overlay';
import { HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { defer, Observable, Subject, Subscriber } from 'rxjs';
import { asyncData } from 'src/testing/async-observable-helpers';
import { COUNTRY_DATA } from '../country/test-country.service';
import { SpinnerService } from '../spinner/spinner.service';

import { LoadingInterceptor } from './loading.interceptor';

describe('LoadingInterceptor', () => {
  let interceptor: LoadingInterceptor;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadingInterceptor,
      Overlay,
      SpinnerService
    ]
  }));

  beforeEach(() => {
    interceptor = TestBed.inject(LoadingInterceptor);
  })

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should intercept call', async () => {
    const request = new HttpRequest<any>('GET', '/api/v1');
    const next = new TestHttpHandler();
    // const handleSpy = spyOn(next, 'handle');
    const data: any = await interceptor.intercept(request, next).toPromise();
    expect(data.length).toEqual(1);
  })

});

class TestHttpHandler extends HttpHandler {

  handle(req: HttpRequest<any>) {
    return new Observable<any>((subscriber) => {
      subscriber.next(COUNTRY_DATA)
      subscriber.complete();
    })
  }

}
