import { computed, Injectable, signal } from '@angular/core';
import { DcLayoutSlotItem } from './layout-slot-item';
import { DcLayoutSlotName } from './layout-types';
import { sortLayoutSlots } from './layout-utils';

@Injectable({
  providedIn: 'root',
})
export class DcLayoutSlotService {
  private list = signal<DcLayoutSlotItem[]>([]);

  addItem(item: DcLayoutSlotItem) {
    this.list.update((list) => [...list, item]);
  }

  removeItem(item: DcLayoutSlotItem) {
    this.list.update((list) => list.filter((_item) => _item !== item));
  }

  getItems(name: DcLayoutSlotName) {
    return computed(() => sortLayoutSlots(this.list().filter((item) => item.name() === name)));
  }
}
