import { DcLayoutRegionItem } from './layout-region-item';

export const sortLayoutRegions = (list: DcLayoutRegionItem[]) =>
  list
    .map((item, index) => ({ item, index: item.index() ?? index }))
    .sort((a, b) => a.index - b.index)
    .map(({ item }) => item);
