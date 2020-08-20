import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }

  open() {
    this.loaderSubject.next(true);
  }

  close() {
    this.loaderSubject.next(false);
  }
}
