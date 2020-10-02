import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: 'input[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('input', ['$event']) onInputChange(event): void {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.replace(/[^0-9]*/g, '');
    if (value !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
