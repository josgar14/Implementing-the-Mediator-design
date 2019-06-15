import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Istock } from '../istock';
import { interval } from 'rxjs';

@Component({
  selector: 'app-price-quoter',
  templateUrl: './price-quoter.component.html',
  styleUrls: ['./price-quoter.component.css']
})
export class PriceQuoterComponent implements OnInit {

  @Output() buy: EventEmitter <Istock> = new EventEmitter();

  stockSymbol = 'IBM';
  lastPrice: number;

  constructor() {
    interval(2000).subscribe(data => this.lastPrice = 100 * Math.random());
   }

   buyStocks(): void {
     const stockToBuy: Istock = {
       stockSymbol: this.stockSymbol,
       bidPrice: this.lastPrice
     };

     this.buy.emit(stockToBuy);
   }

  ngOnInit() {
  }

}
