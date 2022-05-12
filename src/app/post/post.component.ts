import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { ItemService } from '../item.service';
import { WaitTimeService } from '../wait-time.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  items:{name:string,price:number,preparation_time:number}[]=[]
  constructor(private itemSer:ItemService,private checkSer:CheckoutService,private wait:WaitTimeService ) { }
  orderConfirm:number=19999999
  calcWaitTime():number{
    return this.wait.getOrderWaitTime(this.items)

  }
  ngOnInit(): void {
    this.itemSer.addCart.subscribe((item:{name:string,price:number,preparation_time:number})=>{
      this.items.push(item);  
    })
  }

}
