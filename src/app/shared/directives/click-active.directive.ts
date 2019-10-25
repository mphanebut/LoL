import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickActive]'
})
export class ClickActiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.el.nativeElement.classList.toggle('active');
  }

}
