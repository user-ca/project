import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  mainVisible: boolean = true;
  checkoutVisible: boolean = false;
  postVisible: boolean = false;

  constructor() { }

  showMain(): void {
    this.mainVisible = true;
    this.checkoutVisible = false;
    this.postVisible = false;
  }

  showCheckout(): void {
    this.mainVisible = false;
    this.checkoutVisible = true;
    this.postVisible = false;
  }

  showPost(): void {
    this.mainVisible = false;
    this.checkoutVisible = false;
    this.postVisible = true;
  }

}
