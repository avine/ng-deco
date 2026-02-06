import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { DcMenuItem } from '../menu-types';
import { DcSideMenuNode } from './side-menu-node';

@Injectable()
export class DcSideMenuState {
  readonly expanded = signal(new Set<DcMenuItem>());

  toggle(item: DcMenuItem): void {
    this.expanded.update((prev) => {
      const next = new Set(prev);
      if (next.has(item)) {
        next.delete(item);
      } else {
        next.add(item);
      }
      return next;
    });
  }
}

@Component({
  selector: 'dc-side-menu',
  host: {
    class: 'dc-side-menu',
    role: 'tree',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DcSideMenuNode],
  providers: [DcSideMenuState],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSideMenu {
  readonly items = input.required<DcMenuItem[]>();
}
