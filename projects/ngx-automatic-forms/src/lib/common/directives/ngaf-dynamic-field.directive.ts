import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngafDynamicField]',
})
export class NgAFDynamicFieldDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
