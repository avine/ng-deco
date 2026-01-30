import { DcLayoutRegion } from './layout-region';

export const sortLayoutRegions = (list: DcLayoutRegion[]) =>
  list
    .map((item, index) => ({ item, index: item.index() ?? index }))
    .sort((a, b) => a.index - b.index)
    .map(({ item }) => item);
