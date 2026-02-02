import { Component, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[dcSidenavTrigger]',
  host: {
    type: 'button',
    class: 'dc-sidenav-trigger',
    '[class.dc-sidenav-trigger--open-btn]': 'action() === "open"',
    '[class.dc-sidenav-trigger--close-btn]': 'action() === "close"',
    '[class.dc-sidenav-trigger--open-btn-collapsed]': 'openCollapsed()',
  },
  imports: [MatIconModule],
  templateUrl: './sidenav-trigger.html',
  styleUrl: './sidenav-trigger.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSidenavTrigger {
  private elementRef = inject<ElementRef<HTMLButtonElement>>(ElementRef);

  icon = input<string>();

  closeIcon = input<string>();

  action = input.required<'open' | 'close'>({ alias: 'dcSidenavTrigger' });

  openCollapsed = input(false);

  public focus() {
    this.elementRef.nativeElement.focus();
  }
}
