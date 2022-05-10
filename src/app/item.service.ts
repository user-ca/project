import { Injectable, EventEmitter } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  onSelect: EventEmitter<Item> = new EventEmitter<Item>();
  addCart: EventEmitter<{name: string, price: number}> = new EventEmitter<{name: string, price: number}>();


  constructor() { }
  
}
