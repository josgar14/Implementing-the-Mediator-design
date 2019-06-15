import { Component } from '@angular/core';
import { Istock } from './istock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  receivedStock: Istock;

  priceQuoteHandler(event: Istock) {
    this.receivedStock = event;
  }
}
