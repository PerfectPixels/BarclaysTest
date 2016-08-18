import {Directive, ElementRef, OnInit, Input, Output, EventEmitter} from '@angular/core';

declare var $:any;

@Directive({
  selector: '[daterangepicker]'
})

export class DateRangePickerDirective implements OnInit {
  @Input() options: Object = {};
  @Output() selected: any = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    $(this.elementRef.nativeElement)
      .daterangepicker(this.options);
  }
}
