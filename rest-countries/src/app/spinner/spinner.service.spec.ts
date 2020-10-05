import { Overlay } from '@angular/cdk/overlay';
import { TestBed } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Overlay]
    });
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start spinner', () => {
    const startSpy = spyOn(service, 'start');
    service.start();
    expect(startSpy).toHaveBeenCalled();
  })

  it('should stop spinner', () => {
    const stopSpy = spyOn(service, 'stop');
    service.stop();
    expect(stopSpy).toHaveBeenCalled();
  })

  
});
