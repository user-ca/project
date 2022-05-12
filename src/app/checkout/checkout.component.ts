import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';


import { CheckoutService } from '../checkout.service';
import { ViewService } from '../view.service';
import { Item } from '../item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  items:Item[]=[]
  constructor(private itemSer:ItemService,private checkSer:CheckoutService,private viewSer:ViewService ) {
      this.items=itemSer.items
   }
  price_sum=0
  phone_num:string=''
  paymentMethod:string[]=[
    "Visa",
    "Master Card",
    "Crypto",
    "Paypal",
    "Cash"
  ]


  
  ngOnInit(): void {
    this.itemSer.addCart.subscribe((item:Item)=>{
      this.items.push(item);  
      this.price_sum+=item.prices[0];   
    })
  }
  completeCheckout():void{
    this.viewSer.showPost()
  }
  


}
