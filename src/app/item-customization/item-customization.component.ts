import { Component, OnInit } from '@angular/core';
import { Item } from './../item';
import { ITEMS } from './../items'

@Component({
  selector: 'app-item-customization',
  templateUrl: './item-customization.component.html',
  styleUrls: ['./item-customization.component.css']
})
export class ItemCustomizationComponent implements OnInit {
  items: Item[] = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
