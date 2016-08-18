import { Component, OnInit } from '@angular/core';
import { RiskDataService } from '../shared/risk-data.service';

@Component({
  selector: 'portfolio-assets',
  templateUrl: 'portfolio-assets.component.html',
  styleUrls: ['portfolio-assets.component.scss']
})
export class PortfolioAssetsComponent implements OnInit {
  errorMessage: string;
  assetsList: any;

  constructor(private riskDataService: RiskDataService) { }

  getData() {
    this.riskDataService.getData()
         .subscribe(
           data => { this.assetsList = data.portfolioAssets },
           error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getData();
  }

}
