import { FactoryProvider, inject, Injectable, signal } from '@angular/core';
import { _isMenuItem } from '../_menu-utils';
import { DcMenuItem, DcMenuItemBase, DcMenuItemChildren } from '../menu-types';

@Injectable()
export class DcSideMenuState {
  readonly expanded = signal(new Set<DcMenuItemBase & DcMenuItemChildren>());

  toggle(item: DcMenuItemBase & DcMenuItemChildren, expanded?: boolean) {
    this.expanded.update((prev) => {
      if ((expanded === false && !prev.has(item)) || (expanded === true && prev.has(item))) {
        return prev;
      }
      const next = new Set(prev);
      if (expanded ?? !next.has(item)) {
        next.add(item);
      } else {
        next.delete(item);
      }
      return next;
    });
  }

  collapseAll() {
    this.expanded.set(new Set());
  }

  expandAll(items: DcMenuItem[]) {
    const next = new Set<DcMenuItemBase & DcMenuItemChildren>();
    const traverse = (_items: DcMenuItem[]) => {
      _items.forEach((item) => {
        if (_isMenuItem.children(item)) {
          next.add(item);
          traverse(item.children);
        }
      });
    };
    traverse(items);
    if (next.size) {
      this.expanded.set(next);
    }
  }
}

export const dcSideMenuStateProvider: FactoryProvider = {
  provide: DcSideMenuState,
  useFactory: () =>
    inject(DcSideMenuState, { optional: true, skipSelf: true }) ?? new DcSideMenuState(),
};
