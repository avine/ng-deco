import { IsActiveMatchOptions, Params } from '@angular/router';

export type DcMenuItem =
  | DcMenuItemChildren
  | DcMenuItemRouterLink
  | DcMenuItemHref
  | DcMenuItemCommand;

export type DcMenuItemFlat = Exclude<DcMenuItem, DcMenuItemChildren>;

interface DcMenuItemBase {
  label: string;
  icon?: string;
}

export interface DcMenuItemChildren extends DcMenuItemBase {
  children: DcMenuItem[];
}

export interface DcMenuItemRouterLink extends DcMenuItemBase {
  routerLink: string[];
  routerLinkActiveOptions?: { exact: boolean } | IsActiveMatchOptions;
  queryParams?: Params;
}

export interface DcMenuItemHref extends DcMenuItemBase {
  href: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
}

export interface DcMenuItemCommand extends DcMenuItemBase {
  command: CallableFunction;
}
