import { FactoryProvider, inject, Injectable, signal } from '@angular/core';
import { DcMenuItemChildren } from '../menu-types';

@Injectable()
export class DcSideMenuState {
  // ----- expandable -----

  readonly expandable = signal<DcMenuItemChildren[]>([]);

  // ----- id -----

  private idMap = new Map<DcMenuItemChildren, string>();

  getId(item: DcMenuItemChildren) {
    let id = this.idMap.get(item);
    if (!id) {
      id = `dc-side-menu-${crypto.randomUUID()}`;
      this.idMap.set(item, id);
    }
    return id;
  }

  // ----- expanded -----

  readonly expanded = signal(new Set<DcMenuItemChildren>());

  toggle(item: DcMenuItemChildren, expanded?: boolean) {
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
    if (!this.expanded().size) {
      return;
    }
    this.expanded.set(new Set());
  }

  expandAll() {
    const expandable = this.expandable();
    if (!expandable.length) {
      return;
    }
    this.expanded.set(new Set(expandable));
  }
}

export const dcSideMenuStateProvider: FactoryProvider = {
  provide: DcSideMenuState,
  useFactory: () =>
    inject(DcSideMenuState, { optional: true, skipSelf: true }) ?? new DcSideMenuState(),
};
