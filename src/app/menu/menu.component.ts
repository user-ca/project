import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from './../item';
import { ITEMS } from './../items'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: Item[]=[];

  constructor(private itemSer: ItemService) {
      for(let item in ITEMS){
        this.items.push(ITEMS[item])
      }
   }

  itemSelect(item: Item): void {
    this.itemSer.onSelect.emit(item);
  }

  ngOnInit(): void {
  }

}
