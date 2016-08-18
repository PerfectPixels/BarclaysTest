import { Injectable } from '@angular/core';

@Injectable()
export class RiskDataService {

  portfolioTickers = [
    {
      name: 'Total Margin',
      delta: +12.5,
      amount: 1231462.57
    },
    {
      name: 'Total Risk',
      delta: -25.65,
      amount: 1456432.34
    },
    {
      name: 'Total Exposure',
      delta: +14.67,
      amount: 3865345.76
    },
    {
      name: 'Total Portfolio Value',
      delta: +8.45,
      amount: 2783938.67
    }
  ];

  portfolioAssets = [
    {
      title: 'R > 40%',
      val: 17,
      accts: 21
    },
    {
      title: 'M > 40%',
      val: 8,
      accts: 17
    },
    {
      title: 'E > 40%',
      val: 23,
      accts: 27
    },
    {
      title: 'PV > 40%',
      val: 2,
      accts: 4
    }
  ];

  indicators = [
    {
      name: 'Indicator 1',
      amount: '21,213.63'
    },
    {
      name: 'Indicator 3',
      amount: '9,567.46'
    },
    {
      name: 'Exposure Indicator 2',
      amount: '11.2%'
    },
    {
      name: 'Exposure Indicator 4',
      amount: '505.65'
    }
  ]

  constructor() { }

}
