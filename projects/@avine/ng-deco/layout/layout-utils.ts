import { DcLayoutSlotItem } from './layout-slot-item';

export const sortLayoutSlots = (list: DcLayoutSlotItem[]) =>
  list
    .map((item, index) => ({ item, index: item.index() ?? index }))
    .sort((a, b) => a.index - b.index)
    .map(({ item }) => item);
