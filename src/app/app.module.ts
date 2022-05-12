import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemCustomizationComponent } from './item-customization/item-customization.component';
import { ItemComponent } from './item/item.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PostComponent } from './post/post.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCustomizationComponent,
    ItemComponent,
    MenuComponent,
    CartComponent,
    CartItemComponent,
    CheckoutComponent,
    PostComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
