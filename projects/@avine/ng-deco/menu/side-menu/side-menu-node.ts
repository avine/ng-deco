import { NgTemplateOutlet } from '@angular/common';
import { Component, forwardRef, inject, input, ViewEncapsulation } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DcIconModule } from '@avine/ng-deco/icon';
import { _isMenuItem } from '../_menu-utils';
import { DcMenuItem } from '../menu-types';
import { DcSideMenuState } from './side-menu-state';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ul[dcSideMenuNode]',
  host: {
    class: 'dc-side-menu-node',
    '[style.--dc-side-menu-node-level]': 'level()',
  },
  imports: [
    NgTemplateOutlet,
    MatRippleModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    DcIconModule,
    forwardRef(() => DcSideMenuNode),
  ],
  templateUrl: './side-menu-node.html',
  styleUrl: './side-menu-node.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSideMenuNode {
  protected isMenuItem = _isMenuItem;

  protected state = inject(DcSideMenuState);

  readonly items = input.required<DcMenuItem[]>();

  readonly level = input(0);

  private uidMap = new Map<DcMenuItem, string>();

  protected getUid(item: DcMenuItem) {
    let uid = this.uidMap.get(item);
    if (!uid) {
      uid = `side-menu-node-${crypto.randomUUID()}`;
      this.uidMap.set(item, uid);
    }
    return uid;
  }
}
