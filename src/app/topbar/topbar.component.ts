import { Component, OnInit } from '@angular/core';
import { ViewService } from './../view.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  
  constructor(public viewSer: ViewService) {}

  ngOnInit(): void {
  }

}
