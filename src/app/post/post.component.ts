import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { WaitTimeService } from '../wait-time.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  items:Item[]=[]
  constructor(private itemSer:ItemService,private checkSer:CheckoutService,private wait:WaitTimeService ) { 
      this.items=itemSer.items;
  }
  orderConfirm:number=19999999
  calcWaitTime():number{
    return this.wait.getOrderWaitTime(this.items)

  }
  ngOnInit(): void {
    this.itemSer.addCart.subscribe((item:Item)=>{
      this.items.push(item);  
    })
  }

}
