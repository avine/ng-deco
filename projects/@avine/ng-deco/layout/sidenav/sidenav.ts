import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DcLayoutSideService } from '../layout-side-service';
import { DcLayoutSlotItemsPipe } from '../layout-slot-items-pipe';
import { DcSidenavToggle } from '../sidenav-toggle/sidenav-toggle';

@Component({
  selector: 'dc-sidenav',
  host: { class: 'dc-sidenav' },
  imports: [NgTemplateOutlet, DcLayoutSlotItemsPipe, DcSidenavToggle],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSidenav {
  protected sideService = inject(DcLayoutSideService);
}
