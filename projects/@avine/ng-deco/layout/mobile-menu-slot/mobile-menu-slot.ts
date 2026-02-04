import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DcLayoutRegionPipe } from '../layout-region-pipe';
import { DcMobileMenuSlotService } from './mobile-menu-slot-service';

@Component({
  selector: 'dc-mobile-menu-slot',
  host: { class: 'dc-mobile-menu-slot' },
  imports: [NgTemplateOutlet, MatButtonModule, MatIconModule, DcLayoutRegionPipe],
  templateUrl: './mobile-menu-slot.html',
  styleUrl: './mobile-menu-slot.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcMobileMenuSlot {
  protected mobileMenuSlotService = inject(DcMobileMenuSlotService);
}
