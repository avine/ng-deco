import { NgModule } from '@angular/core';
import { DcMainMenu } from './main-menu/main-menu';
import { DcSideMenuV3 } from './side-menu-v3/side-menu';

export * from './main-menu/main-menu';
export * from './menu-types';
export * from './side-menu-v3/side-menu';

export const DcMenuModule = [DcMainMenu, DcSideMenuV3] as const;

@NgModule({
  imports: [...DcMenuModule],
  exports: [...DcMenuModule],
})
export class DcMenuNgModule {}
