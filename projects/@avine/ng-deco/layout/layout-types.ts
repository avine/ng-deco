import { MatDrawerMode } from '@angular/material/sidenav';

export type DcLayoutRegionName =
  | 'headerLeft'
  | 'headerCenter'
  | 'headerRight'
  | 'sidenav'
  | 'sidebar'
  | 'panelLeft'
  | 'panelRight'
  | 'desktopMenu'
  | 'mobileMenu';

export interface DcLayoutConfig {
  sidenavWidth: string;

  sidebarWidth: string;
  sidebarDesktopMode: Exclude<MatDrawerMode, 'over'>;

  panelLeftWidth: string;

  panelRightWidth: string;
}
