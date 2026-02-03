import { A11yModule } from '@angular/cdk/a11y';
import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DcLayoutMobileMenuService } from '../layout-mobile-menu-service';
import { DcLayoutRegionPipe } from '../layout-region-pipe';

@Component({
  selector: 'dc-mobile-menu',
  host: { class: 'dc-mobile-menu' },
  imports: [A11yModule, NgTemplateOutlet, MatButtonModule, MatIconModule, DcLayoutRegionPipe],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcMobileMenu {
  protected mobileMenuService = inject(DcLayoutMobileMenuService);
}
