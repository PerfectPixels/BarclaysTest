import { Component, OnInit } from '@angular/core';
import { RiskDataService } from '../shared/risk-data.service';

@Component({
  selector: 'portfolio-tickers',
  templateUrl: 'portfolio-tickers.component.html',
  styleUrls: ['portfolio-tickers.component.scss']
})
export class PortfolioTickersComponent implements OnInit {

  tickersList: Array<any>;

  constructor(private riskDataService: RiskDataService) {
      this.tickersList = riskDataService.portfolioTickers;
  }

  getFormattedMoney(amount){
    return amount.toFixed(2).replace(/./g, function(c, i, a) {
      return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
  }

  ngOnInit() {
  }

}
