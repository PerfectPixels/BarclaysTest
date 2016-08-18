import { Component, OnInit } from '@angular/core';
import { RiskDataService } from '../shared/risk-data.service';

@Component({
  selector: 'indicators',
  templateUrl: 'indicators.component.html',
  styleUrls: ['indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {
  errorMessage: string;
  indicators: any;

  constructor(private riskDataService: RiskDataService) {}

  getData() {
    this.riskDataService.getData()
         .subscribe(
           data => { this.indicators = data.indicators },
           error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getData();
  }

}
