import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Item } from './../item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  
  @Input() cartitem: Item = new Item('',[0],0);

  constructor() { }

  ngOnInit(): void {
  }

}
