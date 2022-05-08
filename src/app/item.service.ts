import { Injectable, EventEmitter } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  
  onSelect: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }
}
