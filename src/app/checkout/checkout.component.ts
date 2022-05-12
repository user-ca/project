import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';


import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  items:{name:string,price:number,preparation_time:number}[]=[]
  constructor(private itemSer:ItemService,private checkSer:CheckoutService ) { }
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
    this.itemSer.addCart.subscribe((item:{name:string,price:number,preparation_time:number})=>{
      this.items.push(item);  
      this.price_sum+=item.price;   
    })
  }
  


}
