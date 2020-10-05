export { ActivatedRoute } from '@angular/router';

import { convertToParamMap, Data, ParamMap, Params } from '@angular/router';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

export class ActivatedRouteStub {
  private subject = new ReplaySubject<ParamMap>();
  private dataSubject = new BehaviorSubject<Data>({country: [{}], countries: [{}]});
  parent: ActivatedRouteStub
  constructor(initialParams?: Params, initialData?: Data) {
    this.setParamMap(initialParams);
    this.setData(initialData);
    
  }

  readonly paramMap = this.subject.asObservable();

  setParamMap(params?: Params) {
    this.subject.next(convertToParamMap(params));
  }

  readonly data = this.dataSubject.asObservable();

  setData(data: Data) {
    this.dataSubject.next(data);
  }
}

export class ActivatedRouteSnapshotStub {
  params: any;

  constructor(params) {
    this.params = params;
  }

  get paramMap() {
    return convertToParamMap(this.params);
  }
}
