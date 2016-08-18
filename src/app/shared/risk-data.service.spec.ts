/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { RiskDataService } from './risk-data.service';

describe('Service: RiskData', () => {
  beforeEach(() => {
    addProviders([RiskDataService]);
  });

  it('should ...',
    inject([RiskDataService],
      (service: RiskDataService) => {
        expect(service).toBeTruthy();
      }));
});
