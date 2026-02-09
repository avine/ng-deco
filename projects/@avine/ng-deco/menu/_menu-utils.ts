import {
  DcMenuItem,
  DcMenuItemChildren,
  DcMenuItemCommand,
  DcMenuItemHref,
  DcMenuItemRouterLink,
} from './menu-types';

export const _isMenuItem = {
  routerLink: (item: DcMenuItem): item is DcMenuItemRouterLink => 'routerLink' in item,

  href: (item: DcMenuItem): item is DcMenuItemHref => 'href' in item,

  command: (item: DcMenuItem): item is DcMenuItemCommand => 'command' in item,

  children: (item: DcMenuItem): item is DcMenuItemChildren => 'children' in item,
} as const;

export const _findAllMenuItemChildren = (items: DcMenuItem[]) => {
  const children: DcMenuItemChildren[] = [];

  (function traverse(_items: DcMenuItem[]) {
    _items.filter(_isMenuItem.children).forEach((item) => {
      children.push(item);
      traverse(item.children);
    });
  })(items);

  return children;
};
