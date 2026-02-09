import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DcLayoutSideService } from '../layout-side-service';
import { DcLayoutSlotItemsPipe } from '../layout-slot-items-pipe';

@Component({
  selector: 'dc-sidebar',
  host: { class: 'dc-sidebar' },
  imports: [NgTemplateOutlet, MatButtonModule, MatIconModule, DcLayoutSlotItemsPipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSidebar {
  protected sideService = inject(DcLayoutSideService);
}
