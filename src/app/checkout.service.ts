import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

private source = new Subject<string>();
cartbutton$ = this.source.asObservable();

  constructor() { }

  Checkout(message: string){
    this.source.next(message);
  }
}


