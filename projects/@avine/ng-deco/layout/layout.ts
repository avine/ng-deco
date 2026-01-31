import { NgTemplateOutlet } from '@angular/common';
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { DcLayoutConfigService } from './layout-config-service';
import { DcLayoutRegionPipe } from './layout-region-pipe';
import { DcLayoutSideService } from './layout-side-service';

@Component({
  selector: 'dc-layout',
  host: {
    class: 'dc-layout',
    '[style]': 'computedStyle()',
  },
  imports: [
    NgTemplateOutlet,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    DcLayoutRegionPipe,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcLayout {
  protected config = inject(DcLayoutConfigService).config;

  protected sideService = inject(DcLayoutSideService);

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
