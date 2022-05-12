import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { CheckoutService } from '../checkout.service';
import { ViewService } from './../view.service';
import { Item } from '../item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitems: Item[] = [];
  


  subotal: number = 0;


  constructor(private itemSer: ItemService,private CheckoutSer: CheckoutService,private viewSer:ViewService) { }

  showCheckout():void{
    this.viewSer.showCheckout()
  }
  ngOnInit(): void {
    this.itemSer.addCart.subscribe((data: Item) => {
      this.cartitems.push(data);
      this.subotal += data.prices[0];
    })
  }
  Checkout(){
    this.CheckoutSer.Checkout('clicked');
  }

}
