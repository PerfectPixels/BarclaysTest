import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from '@angular/http';

import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import { RiskDataService }  from './shared/risk-data.service';

import { DateRangePickerDirective } from './shared/datepicker.directive';

import { AppComponent }               from './app.component';
import { PortfolioTickersComponent }  from './portfolio-tickers/portfolio-tickers.component';
import { PortfolioAssetsComponent }   from './portfolio-assets/portfolio-assets.component';
import { DateRangePickerComponent }   from './datepicker/datepicker.component';
import { IndicatorsComponent } from './indicators/indicators.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    PortfolioTickersComponent,
    PortfolioAssetsComponent,
    MdIcon,
    DateRangePickerDirective,
    DateRangePickerComponent,
    IndicatorsComponent,
  ],
  providers: [
    RiskDataService,
    MdIconRegistry,
    HTTP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
