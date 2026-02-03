import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DcLayoutRegionPipe } from '../layout-region-pipe';
import { DcLayoutSideService } from '../layout-side-service';
import { DcSidenavToggle } from '../sidenav-toggle/sidenav-toggle';

@Component({
  selector: 'dc-sidenav-content',
  host: { class: 'dc-sidenav-content' },
  imports: [NgTemplateOutlet, DcLayoutRegionPipe, DcSidenavToggle],
  templateUrl: './sidenav-content.html',
  styleUrl: './sidenav-content.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSidenavContent {
  protected sideService = inject(DcLayoutSideService);
}
