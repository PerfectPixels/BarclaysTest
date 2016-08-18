import { Component, OnInit } from '@angular/core';
import { RiskDataService } from '../shared/risk-data.service';

@Component({
  selector: 'portfolio-assets',
  templateUrl: 'portfolio-assets.component.html',
  styleUrls: ['portfolio-assets.component.scss']
})
export class PortfolioAssetsComponent implements OnInit {

  assetsList: Array<any>;

  constructor(private riskDataService: RiskDataService) {
    this.assetsList = riskDataService.portfolioAssets;
  }

  ngOnInit() {
  }

}
