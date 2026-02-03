import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DcLayoutRegionPipe } from '../layout-region-pipe';
import { DcLayoutSideService } from '../layout-side-service';

@Component({
  selector: 'dc-main',
  host: { class: 'dc-main' },
  imports: [NgTemplateOutlet, DcLayoutRegionPipe],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcMain {
  protected sideService = inject(DcLayoutSideService);
}
