import { NgModule } from '@angular/core';
import { DcLayout } from './layout';
import { DcLayoutSlotItem } from './layout-slot-item';

export * from './header/header';
export * from './layout';
export * from './layout-config-service';
export * from './layout-constants';
export * from './layout-slot-item';
export * from './layout-slot-pipe';
export * from './layout-slot-service';
export * from './layout-side-service';
export * from './layout-types';
export * from './main/main';
export * from './mobile-menu-slot/mobile-menu-slot';
export * from './mobile-menu-slot/mobile-menu-slot-service';
export * from './sidebar/sidebar';
export * from './sidenav-toggle/sidenav-toggle';
export * from './sidenav/sidenav';

export const DcLayoutModule = [DcLayout, DcLayoutSlotItem] as const;

@NgModule({
  imports: [...DcLayoutModule],
  exports: [...DcLayoutModule],
})
export class DcLayoutNgModule {}
