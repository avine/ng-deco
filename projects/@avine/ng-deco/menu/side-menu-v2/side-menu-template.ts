import { Directive } from '@angular/core';
import { DcMenuItem } from '../menu-types';

export interface DcSideMenuTemplateContext {
  items: DcMenuItem[];
  level: number;
}

@Directive({
  selector: 'ng-template[dcSideMenuTemplate]',
})
export class DcSideMenuTemplate {
  static ngTemplateContextGuard(
    directive: DcSideMenuTemplate,
    context: unknown,
  ): context is DcSideMenuTemplateContext {
    return true;
  }
}
