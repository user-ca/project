import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items:{name:string,price:number,preparation_time:number}[]=[]
  constructor(private itemSer:ItemService ) { }
  price_sum=0
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
