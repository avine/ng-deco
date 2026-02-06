import { IsActiveMatchOptions, Params } from '@angular/router';

export type DcMenuItem = DcMenuItemBase &
  (DcMenuItemChildren | DcMenuItemRouterLink | DcMenuItemHref | DcMenuItemCommand);

export type DcMenuItemFlat = Exclude<DcMenuItem, DcMenuItemChildren>;

export interface DcMenuItemBase {
  label: string;
  icon?: string;
}

export interface DcMenuItemChildren {
  children: DcMenuItem[];
}

export interface DcMenuItemRouterLink {
  routerLink: string[];
  routerLinkActiveOptions?: { exact: boolean } | IsActiveMatchOptions;
  queryParams?: Params;
}

export interface DcMenuItemHref {
  href: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
}

export interface DcMenuItemCommand {
  command: CallableFunction;
}
