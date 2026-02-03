import { NgModule } from '@angular/core';
import { DcLayout } from './layout';
import { DcLayoutRegionItem } from './layout-region-item';

export * from './header/header';
export * from './layout';
export * from './layout-config-service';
export * from './layout-constants';
export * from './layout-mobile-menu-service';
export * from './layout-region-item';
export * from './layout-region-pipe';
export * from './layout-region-service';
export * from './layout-side-service';
export * from './layout-types';
export * from './main/main';
export * from './sidebar/sidebar';
export * from './sidenav-toggle/sidenav-toggle';
export * from './sidenav/sidenav';

export const DcLayoutModule = [DcLayout, DcLayoutRegionItem] as const;

@NgModule({
  imports: [...DcLayoutModule],
  exports: [...DcLayoutModule],
})
export class DcLayoutNgModule {}
