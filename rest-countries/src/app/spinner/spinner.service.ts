import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';
import { Observable, Subject } from 'rxjs';
import { scan, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spinnerSubject: Subject<any> = new Subject<any>();
  private spinnerObservable: Observable<any> = this.spinnerSubject.asObservable();
  private spinnerOverlayRef: OverlayRef = null;
  
  constructor(
    private overlay: Overlay
  ) {
    this.spinnerOverlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });

    this.spinnerObservable
      .pipe(
        map(val => val ? 1 : -1 ),
        scan((acc, one) => (acc + one) >= 0 ? acc + one : 0, 0)
      )
      .subscribe(
        (res) => {
          if(res === 1){ this._startSpinner() }
          else if( res == 0 ){ 
            this.spinnerOverlayRef.hasAttached() ? this._stopSpinner(): null;
          }
        }
      )
  }

  start() {
    this.spinnerSubject.next(true)
  }

  stop() {
    this.spinnerSubject.next(false);
  }

  private _startSpinner() {
    this.spinnerOverlayRef.attach(new ComponentPortal(MatSpinner));
  }

  private _stopSpinner() {
    this.spinnerOverlayRef.detach();
  }

}
