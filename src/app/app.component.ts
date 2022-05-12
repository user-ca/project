import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { ViewService } from './view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemService, ViewService]
})

export class AppComponent {
  title = 'project';

  constructor(public viewSer: ViewService) {}

}
