import { Injectable } from '@angular/core';
import { Item } from './item';
@Injectable({
  providedIn: 'root'
})
export class WaitTimeService {

  constructor() { }

  getOrderWaitTime(items:Item[]):number{
    let wait=0;
    for (let i=0;i<items.length;i++){
      wait+=items[i].preparation_time
    }
    return wait
  }
}
