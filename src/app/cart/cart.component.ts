import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems: {name: string, price: number}[] = [];

  subotal: number = 0;


  constructor(private itemSer: ItemService,private CheckoutSer: CheckoutService) { }

  ngOnInit(): void {
    this.itemSer.addCart.subscribe((data: {name: string, price: number}) => {
      this.cartitems.push(data);
      this.subotal += data.price;
    })
  }
  Checkout(){
    this.CheckoutSer.Checkout('clicked');
  }

}
