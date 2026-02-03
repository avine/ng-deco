import { Component, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[dcSidenavToggle]',
  host: {
    type: 'button',
    class: 'dc-sidenav-toggle',
    '[class.dc-sidenav-toggle--open]': 'action() === "open"',
    '[class.dc-sidenav-toggle--close]': 'action() === "close"',
    '[class.dc-sidenav-toggle--open-collapsed]': 'openCollapsed()',
  },
  imports: [MatIconModule],
  templateUrl: './sidenav-toggle.html',
  styleUrl: './sidenav-toggle.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSidenavToggle {
  private elementRef = inject<ElementRef<HTMLButtonElement>>(ElementRef);

  icon = input<string>();

  closeIcon = input<string>();

  action = input.required<'open' | 'close'>({ alias: 'dcSidenavToggle' });

  openCollapsed = input(false);

  public focus() {
    this.elementRef.nativeElement.focus();
  }
}
