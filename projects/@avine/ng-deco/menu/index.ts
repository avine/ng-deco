import { NgModule } from '@angular/core';
import { DcMainMenu } from './main-menu/main-menu';
import { DcSideMenuV2 } from './side-menu-v2/side-menu';
import { DcSideMenu } from './side-menu/side-menu';

export * from './main-menu/main-menu';
export * from './menu-types';
export * from './side-menu-v2/side-menu';
export * from './side-menu-v2/side-menu-state';
export * from './side-menu-v2/side-menu-template';
export * from './side-menu/side-menu';

export const DcMenuModule = [DcMainMenu, DcSideMenu, DcSideMenuV2] as const;

@NgModule({
  imports: [...DcMenuModule],
  exports: [...DcMenuModule],
})
export class DcMenuNgModule {}
