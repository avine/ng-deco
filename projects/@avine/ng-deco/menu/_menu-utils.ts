import {
  DcMenuItem,
  DcMenuItemBase,
  DcMenuItemChildren,
  DcMenuItemCommand,
  DcMenuItemHref,
  DcMenuItemRouterLink,
} from './menu-types';

export const _isMenuItem = {
  routerLink: (item: DcMenuItem): item is DcMenuItemBase & DcMenuItemRouterLink =>
    'routerLink' in item,

  href: (item: DcMenuItem): item is DcMenuItemBase & DcMenuItemHref => 'href' in item,

  command: (item: DcMenuItem): item is DcMenuItemBase & DcMenuItemCommand => 'command' in item,

  children: (item: DcMenuItem): item is DcMenuItemBase & DcMenuItemChildren => 'children' in item,
} as const;
