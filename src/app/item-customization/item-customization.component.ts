import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-customization',
  templateUrl: './item-customization.component.html',
  styleUrls: ['./item-customization.component.css']
})
export class ItemCustomizationComponent implements OnInit {
 
  name: string = 'Pizza';
  price: number = 0;

  constructor(private itemSer: ItemService) { }

  ngOnInit(): void {
    this.itemSer.onSelect.subscribe((data: Item) => {
      this.name = data.name;
      this.price = data.price;
    });
  }

}
