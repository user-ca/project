import { Injectable, EventEmitter } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  onSelect: EventEmitter<Item> = new EventEmitter<Item>();
  addCart: EventEmitter<Item> = new EventEmitter<Item>();
  items:Item[]=[]
  

  constructor() { 
    this.addCart.subscribe((item:Item)=>{
      this.items.push(item);  
        
    })
  }

}
