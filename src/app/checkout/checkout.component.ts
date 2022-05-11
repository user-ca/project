import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private CheckoutSer: CheckoutService ) { }

  ngOnInit(){
    this.CheckoutSer.cartbutton$.subscribe(
      message => {
        if (message == 'clicked') {
          alert('checking out')
        }
      });
  }



}
