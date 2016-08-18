import { Component } from '@angular/core';

@Component({
  selector: 'datepicker-range',
  templateUrl: 'datepicker.component.html',
  styleUrls: ['datepicker.component.scss']
})
export class DateRangePickerComponent {

  today = new Date();
  weekDate = new Date();
  week = this.weekDate.setDate(this.weekDate.getDate() + 7);

  pickerOptions: Object = {
    'showDropdowns': true,
    'showWeekNumbers': true,
    'timePickerIncrement': 5,
    'autoApply': true,
    "locale": {
      "format": "DD MMM YYYY",
      "daysOfWeek": [
         "Mo",
         "Tu",
         "We",
         "Th",
         "Fr",
         "Sa",
         "Su"
      ],
    },
    'startDate': this.today.toLocaleDateString('en-GB'),
    'endDate': this.weekDate.toLocaleDateString('en-GB')
  };

}
