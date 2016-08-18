import { Component, OnInit } from '@angular/core';
import { RiskDataService } from '../shared/risk-data.service';

@Component({
  selector: 'indicators',
  templateUrl: 'indicators.component.html',
  styleUrls: ['indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {

  indicators: Array<any>;

  constructor(private riskDataService: RiskDataService) {
    this.indicators = riskDataService.indicators;
  }

  ngOnInit() {
  }

}
