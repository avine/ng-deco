import { Component, input, ViewEncapsulation } from '@angular/core';
import { DcMenuItem } from '../menu-types';
import { DcSideMenuNode } from './side-menu-node';
import { DcSideMenuState } from './side-menu-state';

@Component({
  selector: 'dc-side-menu',
  providers: [DcSideMenuState],
  imports: [DcSideMenuNode],
  templateUrl: './side-menu.html',
  encapsulation: ViewEncapsulation.None,
})
export class DcSideMenu {
  readonly items = input.required<DcMenuItem[]>();
}
