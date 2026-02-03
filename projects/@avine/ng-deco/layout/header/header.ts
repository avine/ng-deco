import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DcLayoutRegionPipe } from '../layout-region-pipe';
import { DcMobileMenuService } from '../mobile-menu/mobile-menu-service';

@Component({
  selector: 'dc-header',
  host: { class: 'dc-header' },
  imports: [NgTemplateOutlet, MatButtonModule, MatIconModule, MatToolbarModule, DcLayoutRegionPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcHeader {
  protected mobileMenuService = inject(DcMobileMenuService);
}
