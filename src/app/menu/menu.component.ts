import { Component, OnInit } from '@angular/core';
import { Item } from './../item';
import { ITEMS } from './../items'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: Item[] = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
