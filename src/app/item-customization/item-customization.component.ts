import { formatCurrency } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ITEMS } from './../items'

@Component({
  selector: 'app-item-customization',
  templateUrl: './item-customization.component.html',
  styleUrls: ['./item-customization.component.css']
})
export class ItemCustomizationComponent implements OnInit {
  items: Item[] = ITEMS;

  name: string = 'Pizza';
  price: number = 5.00;
  prep_time:number=3.00;

  size: string = 'Medium';

  constructor(private itemSer: ItemService) { }

  addToOrder(): void {
    this.itemSer.addCart.emit({name: (this.size + ' ' + this.name), price: this.price,preparation_time:this.prep_time});
  }

  changeSize(size: string): void {
    if(size == 'XL')
    {
      this.size = "Extra Large";
      this.price = ITEMS.find((e: { name: string; }) => e.name === this.name).prices[0];
    }
    if(size == 'L')
    {
      this.size = "Large";
      this.price = ITEMS.find((e: { name: string; }) => e.name === this.name).prices[1];
    }
    if(size == 'M')
    {
      this.size = "Medium";
      this.price = ITEMS.find((e: { name: string; }) => e.name === this.name).prices[2];
    }
    if(size == 'S')
    {
      this.size = "Small";
      this.price = ITEMS.find((e: { name: string; }) => e.name === this.name).prices[3];
    }
  }

  ngOnInit(): void {
    this.itemSer.onSelect.subscribe((data: Item) => {
      this.name = data.name;
      this.price = data.prices[2];
      this.size = 'Medium'
    })

  }

}
