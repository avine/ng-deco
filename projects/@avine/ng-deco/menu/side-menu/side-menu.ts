import { Component, input, ViewEncapsulation } from '@angular/core';
import { _isMenuItem } from '../_menu-utils';
import { DcMenuItem } from '../menu-types';

@Component({
  selector: 'dc-side-menu',
  host: { class: 'dc-main-menu' },
  imports: [],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSideMenu {
  protected isMenuItem = _isMenuItem;

  readonly items = input.required<DcMenuItem[]>();
}
