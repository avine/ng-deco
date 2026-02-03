import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DcLayoutRegionPipe } from '../layout-region-pipe';
import { DcLayoutSideService } from '../layout-side-service';
import { DcSidenavToggle } from '../sidenav-toggle/sidenav-toggle';

@Component({
  selector: 'dc-sidenav',
  host: { class: 'dc-sidenav' },
  imports: [NgTemplateOutlet, DcLayoutRegionPipe, DcSidenavToggle],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSidenav {
  protected sideService = inject(DcLayoutSideService);
}
