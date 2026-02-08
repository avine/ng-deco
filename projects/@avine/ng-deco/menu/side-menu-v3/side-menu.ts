import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DcIconModule } from '@avine/ng-deco/icon';
import { _isMenuItem } from '../_menu-utils';
import { DcMenuItem } from '../menu-types';
import { DcSideMenuState, dcSideMenuStateProvider } from './side-menu-state';

interface _DcSideMenuData {
  level: number;
  id?: string;
}

@Component({
  selector: 'dc-side-menu-v3',
  host: { class: 'dc-side-menu' },
  providers: [dcSideMenuStateProvider],
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

  readonly _data = input<_DcSideMenuData>({ level: 0 });

  private idMap = new Map<DcMenuItem, string>();

  protected getId(item: DcMenuItem) {
    let id = this.idMap.get(item);
    if (!id) {
      id = `side-menu-${crypto.randomUUID()}`;
      this.idMap.set(item, id);
    }
    return id;
  }
}
