import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DcLayoutRegionPipe } from '../layout-region-pipe';
import { DcMobileMenuService } from './mobile-menu-service';

@Component({
  selector: 'dc-mobile-menu',
  host: { class: 'dc-mobile-menu' },
  imports: [NgTemplateOutlet, MatButtonModule, MatIconModule, DcLayoutRegionPipe],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcMobileMenu {
  protected mobileMenuService = inject(DcMobileMenuService);
}
