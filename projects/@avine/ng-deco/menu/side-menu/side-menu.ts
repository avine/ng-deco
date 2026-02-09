import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  Component,
  effect,
  inject,
  input,
  numberAttribute,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DcIconModule } from '@avine/ng-deco/icon';
import { _isMenuItem } from '../_menu-utils';
import { DcMenuItem, DcMenuItemRouterLink } from '../menu-types';
import { DcSideMenuChildren, dcSideMenuStateProvider } from './side-menu-children';

interface _DcSideMenuData {
  level: number;
  id?: string;
}

@Component({
  selector: 'dc-side-menu',
  host: { class: 'dc-side-menu' },
  providers: [dcSideMenuStateProvider],
  imports: [
    NgTemplateOutlet,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    DcIconModule,
  ],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSideMenu {
  protected isMenuItem = _isMenuItem;

  protected children = inject(DcSideMenuChildren);

  readonly items = input.required<DcMenuItem[]>();

  readonly toolbarThreshold = input(3, { transform: numberAttribute });

  readonly toolbarHidden = input(false, { transform: booleanAttribute });

  readonly _data = input<_DcSideMenuData>({ level: 0 });

  readonly activeMenuItem = output<DcMenuItemRouterLink>();

  constructor() {
    effect(() => {
      if (this._data().level !== 0) {
        return;
      }
      this.children.update(this.items());
    });
  }
}
