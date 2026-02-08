import { NgModule } from '@angular/core';
import { DcMainMenu } from './main-menu/main-menu';
import { DcSideMenu } from './side-menu/side-menu';

export * from './main-menu/main-menu';
export * from './menu-types';
export * from './side-menu/side-menu';

export const DcMenuModule = [DcMainMenu, DcSideMenu] as const;

@NgModule({
  imports: [...DcMenuModule],
  exports: [...DcMenuModule],
})
export class DcMenuNgModule {}
