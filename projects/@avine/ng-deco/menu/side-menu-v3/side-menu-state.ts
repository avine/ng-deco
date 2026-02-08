import { FactoryProvider, inject, Injectable, signal } from '@angular/core';
import { DcMenuItem } from '../menu-types';

@Injectable()
export class DcSideMenuState {
  readonly expanded = signal(new Set<DcMenuItem>());

  toggle(item: DcMenuItem) {
    this.expanded.update((prev) => {
      const next = new Set(prev);
      if (next.has(item)) {
        next.delete(item);
      } else {
        next.add(item);
      }
      return next;
    });
  }
}

export const dcSideMenuStateProvider: FactoryProvider = {
  provide: DcSideMenuState,
  useFactory: () =>
    inject(DcSideMenuState, { optional: true, skipSelf: true }) ?? new DcSideMenuState(),
};
