import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DcIconModule } from '@avine/ng-deco/icon';
import { _isMenuItem } from '../_menu-utils';
import { DcMenuItemFlat } from '../menu-types';
import { DcMainMenuActiveLink } from './main-menu-types';

@Component({
  selector: 'dc-main-menu',
  host: {
    class: 'dc-main-menu',
    '[class.dc-main-menu--horizontal]': '!vertical()',
    '[class.dc-main-menu--vertical]': 'vertical()',
    '[style]': 'indicatorStyle()',
  },
  imports: [
    NgTemplateOutlet,
    MatRippleModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    DcIconModule,
  ],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcMainMenu {
  protected isMenuItem = _isMenuItem;

  readonly items = input.required<DcMenuItemFlat[]>();

  readonly vertical = input(false, { transform: booleanAttribute });

  protected activeLink = signal<DcMainMenuActiveLink | undefined>(undefined);

  protected indicatorStyle = computed(() => {
    const { element } = this.activeLink() ?? { element: undefined };
    if (!element) {
      return '';
    }
    const vertical = this.vertical();

    const offset = vertical ? element.offsetTop : element.offsetLeft;
    const size = vertical ? element.offsetHeight : element.offsetWidth;

    if (offset === undefined || size === undefined) {
      return '';
    }

    return [
      `--dc-main-menu-indicator-offset: ${offset}px`,
      `--dc-main-menu-indicator-size: ${size}px`,
    ].join(';');
  });
}
