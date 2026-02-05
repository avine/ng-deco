import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DcLayoutSideService } from '../layout-side-service';
import { DcLayoutSlotItemsPipe } from '../layout-slot-items-pipe';

@Component({
  selector: 'dc-main',
  host: { class: 'dc-main' },
  imports: [NgTemplateOutlet, DcLayoutSlotItemsPipe],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcMain {
  protected sideService = inject(DcLayoutSideService);
}
