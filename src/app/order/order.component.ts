import { Component, OnInit, Input } from '@angular/core';
import { Istock } from '../istock';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  message = 'Waiting for orders...';

  @Input() set stock(value: Istock) {
    if (value && value.bidPrice != undefined) {
      this.message = `Placed order to buy 100 shares of
      ${value.stockSymbol} at \$${value.bidPrice.toFixed(2)}`;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
