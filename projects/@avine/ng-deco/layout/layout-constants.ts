import { DcLayoutConfig } from './layout-types';

export const DC_LAYOUT_DEFAULT_CONFIG = {
  sidenavWidth: '176px',

  sidebarWidth: '176px',
  sidebarDesktopMode: 'push',

  panelLeftWidth: '176px',

  panelRightWidth: '176px',
} as const satisfies DcLayoutConfig;
