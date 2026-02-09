import { FactoryProvider, inject, Injectable, signal } from '@angular/core';
import { _findAllMenuItemChildren } from '../_menu-utils';
import { DcMenuItem, DcMenuItemChildren } from '../menu-types';

@Injectable()
export class DcSideMenuChildren {
  readonly idMap = signal(new Map<DcMenuItemChildren, string>());

  readonly expandedSet = signal(new Set<DcMenuItemChildren>());

  update(items: DcMenuItem[]) {
    const children = _findAllMenuItemChildren(items);
    this.updateIdMap(children);
    this.updateExpandedSet(children);
  }

  private updateIdMap(children: DcMenuItemChildren[]) {
    const idMapEntries: [DcMenuItemChildren, string][] = children.map((item) => [
      item,
      `dc-side-menu-${crypto.randomUUID()}`,
    ]);
    this.idMap.set(new Map(idMapEntries));
  }

  private updateExpandedSet(children: DcMenuItemChildren[]) {
    const childrenSet = new Set(children);
    this.expandedSet.update((items) => new Set([...items].filter((item) => childrenSet.has(item))));
  }

  toggle(item: DcMenuItemChildren, expanded?: boolean) {
    this.expandedSet.update((prevSet) => {
      if ((expanded === false && !prevSet.has(item)) || (expanded === true && prevSet.has(item))) {
        return prevSet;
      }
      const nextSet = new Set(prevSet);
      if (expanded ?? !nextSet.has(item)) {
        nextSet.add(item);
      } else {
        nextSet.delete(item);
      }
      return nextSet;
    });
  }

  collapseAll() {
    if (!this.expandedSet().size) {
      return;
    }
    this.expandedSet.set(new Set());
  }

  expandAll() {
    const expandedSet = new Set(this.idMap().keys());
    if (expandedSet.size === this.expandedSet().size) {
      return;
    }
    this.expandedSet.set(expandedSet);
  }
}

export const dcSideMenuStateProvider: FactoryProvider = {
  provide: DcSideMenuChildren,
  useFactory: () =>
    inject(DcSideMenuChildren, { optional: true, skipSelf: true }) ?? new DcSideMenuChildren(),
};
