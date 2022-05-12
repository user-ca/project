import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { CheckoutService } from '../checkout.service';
import { ViewService } from './../view.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitems: {name: string, price: number,preparation_time:number}[] = [];
  


  subotal: number = 0;


  constructor(private itemSer: ItemService,private CheckoutSer: CheckoutService,private viewSer:ViewService) { }

  showCheckout():void{
    this.viewSer.showCheckout()
  }
  ngOnInit(): void {
    this.itemSer.addCart.subscribe((data: {name: string, price: number,preparation_time:number}) => {
      this.cartitems.push(data);
      this.subotal += data.price;
    })
  }
  Checkout(){
    this.CheckoutSer.Checkout('clicked');
  }

}
