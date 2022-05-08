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
  items: Item[] = ITEMS;

  constructor(private itemSer: ItemService) { }

  itemSelect(item: Item): void {
    this.itemSer.onSelect.emit(item);
  }

  ngOnInit(): void {
  }

}
