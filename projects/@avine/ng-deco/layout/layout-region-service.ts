import { computed, Injectable, signal } from '@angular/core';
import { DcLayoutRegionItem } from './layout-region-item';
import { DcLayoutRegionName } from './layout-types';
import { sortLayoutRegions } from './layout-utils';

@Injectable({
  providedIn: 'root',
})
export class DcLayoutRegionService {
  private list = signal<DcLayoutRegionItem[]>([]);

  add(item: DcLayoutRegionItem) {
    this.list.update((list) => [...list, item]);
  }

  remove(item: DcLayoutRegionItem) {
    this.list.update((list) => list.filter((_item) => _item !== item));
  }

  get(name: DcLayoutRegionName) {
    return computed(() => sortLayoutRegions(this.list().filter((item) => item.name() === name)));
  }
}
