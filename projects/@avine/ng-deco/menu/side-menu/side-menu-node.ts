import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DcIconModule } from '@avine/ng-deco/icon';
import { _isMenuItem } from '../_menu-utils';
import { DcMenuItem } from '../menu-types';
import { DcSideMenuState } from './side-menu';

@Component({
  selector: 'dc-side-menu-node',
  host: {
    class: 'dc-side-menu-node',
    role: 'presentation',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgTemplateOutlet,
    MatRippleModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    DcIconModule,
    forwardRef(() => DcSideMenuNode),
  ],
  templateUrl: './side-menu-node.html',
  encapsulation: ViewEncapsulation.None,
})
export class DcSideMenuNode {
  protected readonly isMenuItem = _isMenuItem;
  protected readonly state = inject(DcSideMenuState);

  readonly items = input.required<DcMenuItem[]>();
  readonly level = input(0);
}
