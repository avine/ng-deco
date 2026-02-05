import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DcLayoutSlotPipe } from '../layout-slot-pipe';
import { DcLayoutSideService } from '../layout-side-service';

@Component({
  selector: 'dc-main',
  host: { class: 'dc-main' },
  imports: [NgTemplateOutlet, DcLayoutSlotPipe],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcMain {
  protected sideService = inject(DcLayoutSideService);
}
