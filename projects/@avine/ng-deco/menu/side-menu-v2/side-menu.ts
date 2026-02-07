import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DcIconModule } from '@avine/ng-deco/icon';
import { _isMenuItem } from '../_menu-utils';
import { DcMenuItem } from '../menu-types';
import { DcSideMenuState } from './side-menu-state';
import { DcSideMenuTemplate, DcSideMenuTemplateContext } from './side-menu-template';

@Component({
  selector: 'dc-side-menu-v2',
  host: {
    class: 'dc-side-menu',
    role: 'navigation',
  },
  providers: [DcSideMenuState],
  imports: [
    NgTemplateOutlet,
    MatRippleModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    DcIconModule,
    DcSideMenuTemplate,
  ],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSideMenuV2 {
  protected isMenuItem = _isMenuItem;

  protected state = inject(DcSideMenuState);

  readonly items = input.required<DcMenuItem[]>();

  private uidMap = new Map<DcMenuItem, string>();

  protected getUid(item: DcMenuItem) {
    let uid = this.uidMap.get(item);
    if (!uid) {
      uid = `side-menu-node-${crypto.randomUUID()}`;
      this.uidMap.set(item, uid);
    }
    return uid;
  }

  protected getTemplateContext(items: DcMenuItem[], level: number): DcSideMenuTemplateContext {
    return { items, level };
  }
}
