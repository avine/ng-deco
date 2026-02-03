import { A11yModule } from '@angular/cdk/a11y';
import {
  afterRenderEffect,
  Component,
  computed,
  inject,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { DcHeader } from './header/header';
import { DcLayoutConfigService } from './layout-config-service';
import { DcLayoutMobileMenuService } from './layout-mobile-menu-service';
import { DcLayoutRegionPipe } from './layout-region-pipe';
import { DcLayoutSideService } from './layout-side-service';
import { DcMain } from './main/main';
import { DcMobileMenu } from './mobile-menu/mobile-menu';
import { DcSidebar } from './sidebar/sidebar';
import { DcSidenavToggle } from './sidenav-toggle/sidenav-toggle';
import { DcSidenav } from './sidenav/sidenav';

@Component({
  selector: 'dc-layout',
  host: {
    class: 'dc-layout',
    '[style]': 'computedStyle()',
  },
  imports: [
    A11yModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    DcHeader,
    DcLayoutRegionPipe,
    DcMain,
    DcMobileMenu,
    DcSidebar,
    DcSidenavToggle,
    DcSidenav,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcLayout {
  protected config = inject(DcLayoutConfigService).config;

  protected sideService = inject(DcLayoutSideService);

  protected mobileMenuService = inject(DcLayoutMobileMenuService);

  private drawerContainer = viewChild(MatDrawerContainer);

  protected computedStyle = computed(() => {
    const { sidenavWidth, sidebarWidth, panelLeftWidth, panelRightWidth } = this.config();
    return [
      `--dc-layout-sidenav-width: ${sidenavWidth}`,
      `--dc-layout-sidebar-width: ${sidebarWidth}`,
      `--dc-layout-panel-left-width: ${panelLeftWidth}`,
      `--dc-layout-panel-right-width: ${panelRightWidth}`,
    ].join('; ');
  });

  constructor() {
    afterRenderEffect(() => {
      this.config();

      this.drawerContainer()?.updateContentMargins(); // FIXME: Faire ça seulement si les sides ont changé dans la config...
    });
  }
}
