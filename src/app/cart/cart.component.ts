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

<<<<<<< Updated upstream
  constructor(public viewSer: ViewService, private itemSer: ItemService) { }
=======

  constructor(private itemSer: ItemService,private CheckoutSer: CheckoutService) { }
>>>>>>> Stashed changes

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
