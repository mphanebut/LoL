import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDdPanel]'
})
export class DdPanelDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.el.nativeElement.querySelectorAll('[data-role=\'panel\']').forEach( (el: HTMLElement) => { el.classList.toggle('active'); } );
  }

}

