import { NgModule } from '@angular/core';
import { DcIcon } from './icon';

export * from './icon';
export * from './icon-constants';
export * from './icon-provider';
export * from './icon-types';
export * from './icon-utils';

export const DcIconModule = [DcIcon] as const;

@NgModule({
  imports: [...DcIconModule],
  exports: [...DcIconModule],
})
export class DcIconNgModule {}
