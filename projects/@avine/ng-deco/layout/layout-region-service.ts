import { computed, Injectable, signal } from '@angular/core';
import { DcLayoutRegion } from './layout-region';
import { DcLayoutRegionName } from './layout-types';
import { sortLayoutRegions } from './layout-utils';

@Injectable({
  providedIn: 'root',
})
export class DcLayoutRegionService {
  private list = signal<DcLayoutRegion[]>([]);

  add(item: DcLayoutRegion) {
    this.list.update((list) => [...list, item]);
  }

  remove(item: DcLayoutRegion) {
    this.list.update((list) => list.filter((_item) => _item !== item));
  }

  get(name: DcLayoutRegionName) {
    return computed(() => sortLayoutRegions(this.list().filter((item) => item.name() === name)));
  }
}
