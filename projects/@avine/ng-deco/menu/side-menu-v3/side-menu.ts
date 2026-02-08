import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DcIconModule } from '@avine/ng-deco/icon';
import { _isMenuItem } from '../_menu-utils';
import { DcMenuItem } from '../menu-types';
import { DcSideMenuState } from './side-menu-state';

@Component({
  selector: 'dc-side-menu-v3',
  host: {
    class: 'dc-side-menu',
    '[attr.role]': 'level() === 0 ? "navigation" : null',
  },
  providers: [
    {
      provide: DcSideMenuState,
      useFactory: () =>
        inject(DcSideMenuState, { optional: true, skipSelf: true }) ?? new DcSideMenuState(),
    },
  ],
  imports: [
    NgTemplateOutlet,
    MatRippleModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    DcIconModule,
  ],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSideMenuV3 {
  protected isMenuItem = _isMenuItem;

  protected state = inject(DcSideMenuState);

  readonly items = input.required<DcMenuItem[]>();

  readonly level = input(0);

  readonly hidden = input(false);

  readonly uid = input<string>();

  private uidMap = new Map<DcMenuItem, string>();

  protected getUid(item: DcMenuItem) {
    let uid = this.uidMap.get(item);
    if (!uid) {
      uid = `side-menu-${crypto.randomUUID()}`;
      this.uidMap.set(item, uid);
    }
    return uid;
  }
}
